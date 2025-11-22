import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ZohoRecruitPages from "./ZohoRecruitPages";
import ZohoSalesIQ from "./ZohoSalesIQ";   // ✅ Import here

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ZohoSalesIQ />       {/* ✅ Loads the Zoho SalesIQ widget */}
    <ZohoRecruitPages />  {/* Your actual app */}
  </StrictMode>
);
