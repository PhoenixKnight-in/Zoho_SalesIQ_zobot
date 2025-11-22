import { useEffect } from "react";

const ZohoSalesIQ = () => {
  useEffect(() => {
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

    if (document.getElementById("zsiqscript")) return;

    const s = document.createElement("script");
    s.id = "zsiqscript";
    s.defer = true;
    s.src =
      "https://salesiq.zohopublic.com/widget?wc=siq4a76cf1202d4615d40ef407e062d686c00293ada420e9026730e70ada3f1a14b";

    document.body.appendChild(s);
  }, []);

  return null;
};

export default ZohoSalesIQ;
