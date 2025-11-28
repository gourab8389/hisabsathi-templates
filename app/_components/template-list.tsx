import AnnexureTaxInvoice from "./annexure-tax-invoice";
import CashInvoiceTemplate from "./cash-invoice-template";
import TaxInvoiceTemplate from "./tax-invoice-template";

const templates = [
  {
    id: "template1",
    name: "Cash Invoice Template",
    content: <CashInvoiceTemplate />,
  },
  {
    id: "template2",
    name: "Tax Invoice Template",
    content: <TaxInvoiceTemplate />,
  },
  {
    id: "template3",
    name: "Annexure Tax Invoice Template(V1)",
    content: <AnnexureTaxInvoice />,
  },
  {
    id: "template4",
    name: "Annexure Tax Invoice Template(V2)",
    content: "This is the content of Template 4.",
  },
];

export default templates;