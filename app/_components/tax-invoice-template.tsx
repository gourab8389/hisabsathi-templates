import QRCode from "react-qr-code";

const TaxInvoiceTemplate = () => {
  const invoiceData = {
    businessDetails: {
      name: "BUSINESS NAME",
      gstin: "27ABCDE1234F2Z5",
      addressLine: "Address Line",
      state: "West Bengal",
      stateCode: "19",
      mobile: "+91 99999999",
      email: "hisaabsathi@gmail.com",
    },
    invoiceInfo: {
      invoiceNumber: "HSI-47",
      invoiceDate: "12 Apr 2024",
      invoicePeriod: "01.03.2024 to 01.04.2024",
      dueDate: "27 Arp 2024",
      placeOfSupply: "56 - KOLKATA",
    },
    billTo: {
      name: "Rama Krishna Verma",
      gstin: "27ABCDE1234F2Z5",
      addressLine1: "Address Line 1",
      addressLine2: "Address Line 2",
      mobile: "+91 99999999",
      email: "hisaabsathi@gmail.com",
    },
    taxDetails: {
      taxableAmount: 28901.25,
      cgst: 5202.22,
      sgst: 5202.22,
      igst: 0.0,
      grandTotal: 39305.7,
      roundOff: 39306.0,
      total: 39306.0,
      amountPayable: 39306.0,
      amountPaid: 0.0,
    },
    bankDetails: {
      bank: "STATE BANK OF INDIA",
      accountNumber: "667899992254",
      ifsc: "SBIN6541236",
      branch: "DUM DUM",
    },
    amountInWords: "Thirty nine thousand, three hundred six point seven zero",
  };

  return (
    <div
      className="w-full max-w-[210mm] mx-auto bg-white p-8 text-xs flex flex-col"
      style={{ minHeight: "297mm" }}
    >
      {/* Header Section */}
      <div className="border border-gray-300 flex justify-between items-start mb-4">
        {/* Left Side - Business Details */}
        <div>
          <h1 className="text-lg font-bold mb-3">
            {invoiceData.businessDetails.name}
          </h1>
          <p className="text-xs mb-1">
            <span className="font-semibold">GSTIN : </span>
            {invoiceData.businessDetails.gstin}
          </p>
          <p className="text-xs mb-1">
            {invoiceData.businessDetails.addressLine}
          </p>
          <p className="text-xs mb-1">
            <span className="font-semibold">State/State Code : </span>
            {invoiceData.businessDetails.state} /{" "}
            {invoiceData.businessDetails.stateCode}
          </p>
          <p className="text-xs mb-1">
            <span className="font-semibold">Mobile : </span>
            {invoiceData.businessDetails.mobile}
          </p>
          <p className="text-xs mb-1">
            <span className="font-semibold">Email : </span>
            {invoiceData.businessDetails.email}
          </p>
        </div>

        {/* Right Side - Invoice Header */}
        <div className="border border-gray-300 text-right">
          <h2 className="text-lg font-bold mb-2">TAX INVOICE</h2>
          <p className="text-xs">
            <span className="font-semibold">Invoice #: </span>
            {invoiceData.invoiceInfo.invoiceNumber}
          </p>
        </div>
      </div>

      {/* Bill To and Invoice Details Row */}
      <div className="border border-gray-300 flex justify-between mb-4">
        {/* Left Side - Bill To */}
        <div className="border border-gray-300 w-[48%]">
          <p className="text-xs font-semibold mb-2">Bill To:</p>
          <p className="text-xs font-semibold mb-1">
            {invoiceData.billTo.name}
          </p>
          <p className="text-xs mb-1">
            <span className="font-semibold">GSTIN : </span>
            {invoiceData.billTo.gstin}
          </p>
          <p className="text-xs mb-1">{invoiceData.billTo.addressLine1}</p>
          <p className="text-xs mb-1">{invoiceData.billTo.addressLine2}</p>
          <p className="text-xs mb-1">
            <span className="font-semibold">Mobile : </span>
            {invoiceData.billTo.mobile}
          </p>
          <p className="text-xs mb-1">
            <span className="font-semibold">Email : </span>
            {invoiceData.billTo.email}
          </p>
        </div>

        {/* Right Side - Invoice Details */}
        <div className="border border-gray-300 w-[48%] pl-24">
          <div className="border border-gray-300 flex justify-between mb-1">
            <span className="text-xs font-semibold">Invoice Date:</span>
            <span className="text-xs">
              {invoiceData.invoiceInfo.invoiceDate}
            </span>
          </div>
          <div className="border border-gray-300 flex justify-between mb-1">
            <span className="text-xs font-semibold">Invoice Period:</span>
            <span className="text-xs">
              {invoiceData.invoiceInfo.invoicePeriod}
            </span>
          </div>
          <div className="border border-gray-300 flex justify-between mb-1">
            <span className="text-xs font-semibold">Due Date:</span>
            <span className="text-xs">{invoiceData.invoiceInfo.dueDate}</span>
          </div>
          <div className="border border-gray-300 flex justify-between mb-1">
            <span className="text-xs font-semibold">Place of Supply:</span>
            <span className="text-xs">
              {invoiceData.invoiceInfo.placeOfSupply}
            </span>
          </div>
        </div>
      </div>

      {/* Tax Summary Section */}
      <div className="border border-gray-300 mb-4">
        <div className="border border-gray-300 flex justify-between mb-1">
          <span className="text-xs font-semibold">Taxable Amount</span>
          <span className="text-xs font-semibold">
            ₹{invoiceData.taxDetails.taxableAmount.toFixed(2)}
          </span>
        </div>
        <div className="border border-gray-300 flex justify-between mb-1">
          <span className="text-xs font-semibold">CGST</span>
          <span className="text-xs font-semibold">
            ₹{invoiceData.taxDetails.cgst.toFixed(2)}
          </span>
        </div>
        <div className="border border-gray-300 flex justify-between mb-1">
          <span className="text-xs font-semibold">SGST</span>
          <span className="text-xs font-semibold">
            ₹{invoiceData.taxDetails.sgst.toFixed(2)}
          </span>
        </div>
        <div className="border border-gray-300 flex justify-between mb-1">
          <span className="text-xs font-semibold">IGST</span>
          <span className="text-xs font-semibold">
            ₹{invoiceData.taxDetails.igst.toFixed(2)}
          </span>
        </div>
        <div className="border border-gray-300 flex justify-between mb-1">
          <span className="text-xs font-semibold">Grand Total</span>
          <span className="text-xs font-semibold">
            ₹{invoiceData.taxDetails.grandTotal.toFixed(2)}
          </span>
        </div>
        <div className="border border-gray-300 flex justify-between mb-3">
          <span className="text-xs font-semibold">Round Off</span>
          <span className="text-xs font-semibold">
            ₹{invoiceData.taxDetails.roundOff.toFixed(2)}
          </span>
        </div>

        {/* Total Amount - Highlighted */}
        <div className="border border-gray-300 bg-blue-50 py-3 px-2 mb-3">
          <div className="border border-gray-300 flex justify-between">
            <span className="text-base font-bold">Total Amount</span>
            <span className="text-base font-bold">
              ₹{invoiceData.taxDetails.total.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="border border-gray-300 flex justify-between mb-1">
          <span className="text-xs font-semibold">Amount Payable:</span>
          <span className="text-xs font-semibold">
            ₹{invoiceData.taxDetails.amountPayable.toFixed(2)}
          </span>
        </div>
        <div className="border border-gray-300 flex justify-between mb-1">
          <span className="text-xs font-semibold">Amount Paid:</span>
          <span className="text-xs font-semibold">
            ₹{invoiceData.taxDetails.amountPaid.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Bank Details and QR Code Row */}
      <div className="border border-gray-300 flex justify-between mb-4">
        {/* Left Side - Bank Details */}
        <div className="border border-gray-300 w-[48%]">
          <p className="text-xs font-semibold mb-2">Bank Details:</p>
          <div className="border border-gray-300 flex mb-1">
            <span className="text-xs font-semibold w-24">Bank</span>
            <span className="text-xs">: {invoiceData.bankDetails.bank}</span>
          </div>
          <div className="border border-gray-300 flex mb-1">
            <span className="text-xs font-semibold w-24">Account #</span>
            <span className="text-xs">
              : {invoiceData.bankDetails.accountNumber}
            </span>
          </div>
          <div className="border border-gray-300 flex mb-1">
            <span className="text-xs font-semibold w-24">IFSC</span>
            <span className="text-xs">: {invoiceData.bankDetails.ifsc}</span>
          </div>
          <div className="border border-gray-300 flex mb-1">
            <span className="text-xs font-semibold w-24">Branch</span>
            <span className="text-xs">: {invoiceData.bankDetails.branch}</span>
          </div>
        </div>

        {/* Right Side - QR Code */}
        <div className="border border-gray-300 text-right">
          <p className="text-xs font-semibold mb-2">Pay using UPI</p>
          <div className="border border-gray-300 inline-block border-2 border-black p-2">
            <QRCode
              value={`upi://pay?pa=hisaabsathi@paytm&pn=${invoiceData.businessDetails.name}&am=${invoiceData.taxDetails.total}&cu=INR&tn=Invoice_${invoiceData.invoiceInfo.invoiceNumber}`}
              size={100}
            />
          </div>
        </div>
      </div>

      {/* Amount in Words */}
      <div className="border border-gray-300 mb-4">
        <p className="text-xs">
          <span className="font-semibold">Total amount (in words) : </span>
          {invoiceData.amountInWords}
        </p>
      </div>

      {/* Notes Section */}
      <div className="border border-gray-300 mb-3">
        <p className="text-xs font-semibold mb-2">Notes:</p>
        <p className="text-xs">Thank you for the Business!</p>
      </div>

      {/* Terms and Conditions */}
      <div className="border border-gray-300 mb-4">
        <p className="text-xs font-semibold mb-2">Terms and Conditions:</p>
        <div className="border border-gray-300 text-xs space-y-0.5">
          <p>
            1. All invoices are payable within 15 days from the date of invoice.
          </p>
          <p>
            2. Late payments penalty of 2.5% interest per day on the outstanding
            balance.
          </p>
          <p>
            3. Any additional services requested by the client shall be subject
            to additional fees.
          </p>
          <p>
            4. The client retains all rights to materials provided by them for
            use in the project.
          </p>
          <p>
            5. Both parties agree to keep all information exchanged during the
            project confidential.
          </p>
          <p>
            6. This includes, business strategies, trade secrets, & any
            proprietary information.
          </p>
          <p>
            7. Company reserves the right to update these terms and conditions
            at any time.
          </p>
          <p>
            8. This agreement shall be governed by and construed in accordance
            with the laws.
          </p>
          <p>
            9. By accepting this invoice, the client agrees to abide by these
            terms and conditions.
          </p>
        </div>
      </div>

      {/* Signature Section */}
      <div className="border border-gray-300 border-t border-black pt-1 mt-6">
        <p className="text-xs">Receiver's Signature</p>
      </div>
    </div>
  );
};

export default TaxInvoiceTemplate;
