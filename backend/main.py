# app_local.py
import os
import uuid
import shutil
from pathlib import Path
from datetime import datetime, timezone, timedelta

from fastapi import FastAPI, File, UploadFile, HTTPException, Depends
from fastapi.responses import JSONResponse
from fastapi.staticfiles import StaticFiles

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)

# get PUBLIC_HOST from env var, default to localhost for local dev
PUBLIC_HOST = os.getenv("PUBLIC_HOST", "http://localhost:8000")

app = FastAPI(title="Resume Upload Demo (Local)", version="1.0")

# mount static directory so files are reachable at /uploads/{filename}
app.mount("/uploads", StaticFiles(directory=str(UPLOAD_DIR)), name="uploads")


@app.post("/upload", response_class=JSONResponse)
async def upload_resume(file: UploadFile = File(...)):
    """
    Accept a single file and save it to uploads/.
    Return a full public URL (PUBLIC_HOST must be set in production).
    """
    # Validate extension
    filename = file.filename or "resume"
    ext = Path(filename).suffix.lower()
    allowed = {".pdf", ".doc", ".docx", ".txt"}
    if ext not in allowed:
        raise HTTPException(status_code=400, detail=f"Unsupported file extension: {ext}")

    unique_name = f"{uuid.uuid4().hex}{ext}"
    dest_path = UPLOAD_DIR / unique_name

    # Save file to disk
    try:
        with dest_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)
    finally:
        await file.close()

    # Build an absolute public URL using PUBLIC_HOST
    # Ensure PUBLIC_HOST does NOT end with a slash
    public_host = PUBLIC_HOST.rstrip("/")
    public_url = f"{public_host}/uploads/{unique_name}"

    return {"status": "success", "filename": filename, "url": public_url, "s3_key": None}


@app.get("/health")
def health():
    return {"status": "ok", "time": datetime.now(timezone.utc).isoformat()}


@app.post("/cleanup", response_class=JSONResponse)
def cleanup_files(max_age_hours: int = 24):
    """
    Delete files older than max_age_hours from uploads directory.
    This endpoint can be called by a Render Cron Job or manually.
    Returns a summary of deleted files.
    """
    now = datetime.now(timezone.utc)
    cutoff = now - timedelta(hours=max_age_hours)

    deleted = []
    kept = []
    for p in UPLOAD_DIR.iterdir():
        if not p.is_file():
            continue
        # use mtime in UTC
        mtime = datetime.fromtimestamp(p.stat().st_mtime, tz=timezone.utc)
        if mtime < cutoff:
            try:
                p.unlink()
                deleted.append(p.name)
            except Exception as e:
                # if deletion fails, keep note
                kept.append({"file": p.name, "error": str(e)})
        else:
            kept.append(p.name)

    return {"status": "success", "deleted_count": len(deleted), "deleted": deleted, "kept_count": len(kept), "kept": kept}


# Optional: small admin endpoint to list current uploads (for debugging)
@app.get("/list_uploads", response_class=JSONResponse)
def list_uploads():
    items = []
    for p in UPLOAD_DIR.iterdir():
        if p.is_file():
            items.append({
                "filename": p.name,
                "size": p.stat().st_size,
                "mtime": datetime.fromtimestamp(p.stat().st_mtime, tz=timezone.utc).isoformat()
            })
    return {"status": "success", "count": len(items), "items": items}
