import { useEffect } from "react";

const ZohoSalesIQ = () => {
  useEffect(() => {
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

    // prevent adding script twice
    if (document.getElementById("zsiqscript")) return;

    const script = document.createElement("script");
    script.id = "zsiqscript";
    script.defer = true;
    script.src =
      "https://salesiq.zohopublic.com/widget?wc=siq4a76cf1202d4615d40ef407e062d686c00293ada420e9026730e70ada3f1a14b";

    document.body.appendChild(script);
  }, []);

  return null; // component renders nothing
};

export default ZohoSalesIQ;
