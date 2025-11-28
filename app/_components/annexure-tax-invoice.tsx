import QRCode from "react-qr-code";

const AnnexureTaxInvoice = () => {
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
    items: [
      {
        id: 1,
        date: "01-03-2025",
        awbNo: "340168490",
        consignee: "aaa 124414",
        dest: "PANJBPUR",
        pcs: "734434",
        weight: "10.25",
        amount: 183.0,
        fov: 10.0,
        total: 193.0,
        value: 45000.0,
      },
      {
        id: 2,
        date: "16-03-2025",
        awbNo: "340168490",
        consignee: "bbb 724165",
        dest: "AAAA",
        pcs: "781592",
        weight: "10.25",
        amount: 548.0,
        fov: 10.0,
        total: 548.0,
        value: 45000.0,
      },
      {
        id: 3,
        date: "25-03-2025",
        awbNo: "340168490",
        consignee: "aaa 774784",
        dest: "HARIDAGHA",
        pcs: "741222",
        weight: "1",
        amount: 193.0,
        fov: 10.0,
        total: 183.0,
        value: 5000.0,
      },
      {
        id: 4,
        date: "25-03-2025",
        awbNo: "340168544",
        consignee: "aaa 774872",
        dest: "HARIDAGHA",
        pcs: "741222",
        weight: "0.5",
        amount: 240.0,
        fov: 10.0,
        total: 240.0,
        value: 5000.0,
      },
    ],
    bankDetails: {
      bank: "STATE BANK OF INDIA",
      accountNumber: "667899992254",
      ifsc: "SBIN6541236",
      branch: "DUM DUM",
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
    amountInWords: "Thirty nine thousand, three hundred six point seven zero",
  };
  return (
    <div
      className="w-full max-w-[210mm] mx-auto bg-white p-8 text-xs"
      style={{ minHeight: "297mm" }}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <h1 className="text-lg font-semibold mb-2">
            {invoiceData.businessDetails.name}
          </h1>
          <p className="text-xs">
            <span className="font-semibold">GSTIN :</span>{" "}
            {invoiceData.businessDetails.gstin}
          </p>
          <p className="text-xs">{invoiceData.businessDetails.addressLine}</p>
          <p className="text-xs">
            <span className="font-semibold">State/State Code :</span>{" "}
            {invoiceData.businessDetails.state} /{" "}
            {invoiceData.businessDetails.stateCode}
          </p>
          <p className="text-xs">
            <span className="font-semibold">Mobile :</span>{" "}
            {invoiceData.businessDetails.mobile}
          </p>
          <p className="text-xs">
            <span className="font-semibold">Email :</span>{" "}
            {invoiceData.businessDetails.email}
          </p>
        </div>
        <div className="text-right">
          <h2 className="text-lg font-semibold">TAX INVOICE</h2>
          <p className="text-xs mt-1">
            <span className="font-semibold">Invoice #:</span>{" "}
            {invoiceData.invoiceInfo.invoiceNumber}
          </p>
        </div>
      </div>

      {/* Bill To and Invoice Details */}
      <div className="flex justify-between mb-5">
        <div className="w-1/2">
          <p className="text-xs font-semibold mb-2">Bill To:</p>
          <p className="text-xs font-semibold">{invoiceData.billTo.name}</p>
          <p className="text-xs">
            <span className="font-semibold">GSTIN :</span>{" "}
            {invoiceData.billTo.gstin}
          </p>
          <p className="text-xs">{invoiceData.billTo.addressLine1}</p>
          <p className="text-xs">{invoiceData.billTo.addressLine2}</p>
          <p className="text-xs">
            <span className="font-semibold">Mobile :</span>{" "}
            {invoiceData.billTo.mobile}
          </p>
          <p className="text-xs">
            <span className="font-semibold">Email :</span>{" "}
            {invoiceData.billTo.email}
          </p>
        </div>
        <div className="w-1/2 pl-24">
          <p className="text-xs flex justify-between">
            <span className="font-semibold">Invoice Date:</span>{" "}
            {invoiceData.invoiceInfo.invoiceDate}
          </p>
          <p className="text-xs flex justify-between">
            <span className="font-semibold">Invoice Period:</span>{" "}
            {invoiceData.invoiceInfo.invoicePeriod}
          </p>
          <p className="text-xs flex justify-between">
            <span className="font-semibold">Due Date:</span>{" "}
            {invoiceData.invoiceInfo.dueDate}
          </p>
          <p className="text-xs flex justify-between">
            <span className="font-semibold">Place of Supply:</span>{" "}
            {invoiceData.invoiceInfo.placeOfSupply}
          </p>
        </div>
      </div>

      {/* Items Table */}
      <table
        className="w-full mb-5"
        style={{ borderSpacing: "2px", borderCollapse: "separate" }}
      >
        <thead>
          <tr>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              #
            </th>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              DATE
            </th>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              AWB NO.
            </th>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              CONSIGNEE
            </th>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              DEST
            </th>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              PCS
            </th>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              WEIGHT
            </th>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              AMOUNT
            </th>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              FOV
            </th>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              TOTAL
            </th>
            <th className="text-left text-xs font-semibold py-2 px-2 border border-gray-800 bg-white">
              VALUE
            </th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item) => (
            <tr key={item.id}>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                {item.id}
              </td>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                {item.date}
              </td>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                {item.awbNo}
              </td>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                {item.consignee}
              </td>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                {item.dest}
              </td>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                {item.pcs}
              </td>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                {item.weight}
              </td>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                ₹ {item.amount.toFixed(2)}
              </td>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                ₹ {item.fov.toFixed(2)}
              </td>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                ₹ {item.total.toFixed(2)}
              </td>
              <td className="text-[11px] py-2 px-2 border border-gray-800 bg-white">
                ₹ {item.value.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bank Details and Payment Summary */}
      <div className="flex justify-between gap-8 mb-5">
        <div className="w-1/2">
          <p className="text-xs font-semibold mb-2">Bank Details:</p>
          <p className="text-xs">
            <span className="font-semibold">Bank:</span>{" "}
            {invoiceData.bankDetails.bank}
          </p>
          <p className="text-xs">
            <span className="font-semibold">Account #:</span>{" "}
            {invoiceData.bankDetails.accountNumber}
          </p>
          <p className="text-xs">
            <span className="font-semibold">IFSC:</span>{" "}
            {invoiceData.bankDetails.ifsc}
          </p>
          <p className="text-xs">
            <span className="font-semibold">Branch:</span>{" "}
            {invoiceData.bankDetails.branch}
          </p>
        </div>

        <div className="flex gap-4 items-start">
          <div>
            <p className="text-xs font-semibold mb-2">Pay using UPI</p>
            <div className="border border-gray-300 p-2">
              <QRCode
                value={`upi://pay?pa=hisaabsathi@paytm&pn=BUSINESS_NAME&am=${invoiceData.taxDetails.total}&cu=INR&tn=Invoice_${invoiceData.invoiceInfo.invoiceNumber}`}
                size={80}
              />
            </div>
          </div>

          <div className="min-w-[200px]">
            <div className="flex justify-between text-xs py-1">
              <span>Taxable Amount</span>
              <span>₹{invoiceData.taxDetails.taxableAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span>CGST</span>
              <span>₹{invoiceData.taxDetails.cgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span>SGST</span>
              <span>₹{invoiceData.taxDetails.sgst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span>IGST</span>
              <span>₹{invoiceData.taxDetails.igst.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span>Grand Total</span>
              <span>₹{invoiceData.taxDetails.grandTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span>Round Off</span>
              <span>₹{invoiceData.taxDetails.roundOff.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm font-semibold py-2 border-t border-b border-gray-800 mt-2">
              <span>Total</span>
              <span>₹{invoiceData.taxDetails.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs py-1 mt-2">
              <span>Amount Payable:</span>
              <span>₹{invoiceData.taxDetails.amountPayable.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xs py-1">
              <span>Amount Paid:</span>
              <span>₹{invoiceData.taxDetails.amountPaid.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Amount in Words */}
      <div className="mb-5">
        <p className="text-xs">
          <span className="font-semibold">Total amount (in words) :</span>{" "}
          {invoiceData.amountInWords}
        </p>
      </div>

      {/* Notes */}
      <div className="mb-5">
        <p className="text-xs font-semibold mb-2">Notes:</p>
        <p className="text-xs">Thank you for the Business!</p>
      </div>

      {/* Signature */}
      <div className="border-t border-gray-800 pt-1 mt-6">
        <p className="text-xs">Receiver's Signature</p>
      </div>
    </div>
  );
};

export default AnnexureTaxInvoice;
