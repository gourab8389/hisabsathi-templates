import QRCode from 'react-qr-code';

const CashInvoiceTemplate = () => {
  const invoiceData = {
    businessDetails: {
      name: "BUSINESS NAME",
      gstin: "27ABCDE1234F2Z5",
      addressLine: "Address Line",
      state: "West Bengal",
      stateCode: "19",
      mobile: "+91 99999999",
      email: "hisaabsathi@gmail.com"
    },
    invoiceInfo: {
      invoiceNumber: "HSI-47",
      invoiceDate: "12 Apr 2024",
      invoicePeriod: "01.03.2024 to 01.04.2024",
      dueDate: "27 Arp 2024",
      placeOfSupply: "56 - KOLKATA"
    },
    billTo: {
      name: "Rama Krishna Verma",
      gstin: "27ABCDE1234F2Z5",
      addressLine1: "Address Line 1",
      addressLine2: "Address Line 2",
      mobile: "+91 99999999",
      email: "hisaabsathi@gmail.com"
    },
    items: [
      {
        id: 1,
        item: "Documents",
        rate: 100.00,
        qty: 3,
        amount: 300.00
      },
      {
        id: 2,
        item: "T-shirts",
        rate: 1000.25,
        qty: 5,
        amount: 5001.25
      },
      {
        id: 3,
        item: "Cargo Pants",
        rate: 900.00,
        qty: 8,
        amount: 5600.00
      },
      {
        id: 4,
        item: "Cosmetics",
        rate: 1500.00,
        qty: 12,
        amount: 18000.00
      }
    ],
    bankDetails: {
      bank: "STATE BANK OF INDIA",
      accountNumber: "667899992254",
      ifsc: "SBIN6541236",
      branch: "DUM DUM"
    },
    taxDetails: {
      taxableAmount: 28901.25,
      cgst: 5202.22,
      sgst: 5202.22,
      igst: 0.00,
      grandTotal: 39305.70,
      roundOff: 39306.00,
      total: 39306.00,
      amountPayable: 39306.00,
      amountPaid: 0.00
    },
    amountInWords: "Thirty nine thousand, three hundred six point seven zero"
  };

  return (
    <div className='w-full max-w-[210mm] mx-auto bg-white p-8 text-xs' style={{ minHeight: '297mm' }}>
      {/* Header */}
      <div className='flex justify-between items-start mb-5'>
        <div>
          <h1 className='text-lg font-semibold mb-2'>{invoiceData.businessDetails.name}</h1>
          <p className='text-xs'><span className='font-semibold'>GSTIN :</span> {invoiceData.businessDetails.gstin}</p>
          <p className='text-xs'>{invoiceData.businessDetails.addressLine}</p>
          <p className='text-xs'><span className='font-semibold'>State/State Code :</span> {invoiceData.businessDetails.state} / {invoiceData.businessDetails.stateCode}</p>
          <p className='text-xs'><span className='font-semibold'>Mobile :</span> {invoiceData.businessDetails.mobile}</p>
          <p className='text-xs'><span className='font-semibold'>Email :</span> {invoiceData.businessDetails.email}</p>
        </div>
        <div className='text-right'>
          <h2 className='text-lg font-semibold'>TAX INVOICE</h2>
          <p className='text-xs mt-1'><span className='font-semibold'>Invoice #:</span> {invoiceData.invoiceInfo.invoiceNumber}</p>
        </div>
      </div>

      {/* Bill To and Invoice Details */}
      <div className='flex justify-between mb-5'>
        <div className='w-1/2'>
          <p className='text-xs font-semibold mb-2'>Bill To:</p>
          <p className='text-xs font-semibold'>{invoiceData.billTo.name}</p>
          <p className='text-xs'><span className='font-semibold'>GSTIN :</span> {invoiceData.billTo.gstin}</p>
          <p className='text-xs'>{invoiceData.billTo.addressLine1}</p>
          <p className='text-xs'>{invoiceData.billTo.addressLine2}</p>
          <p className='text-xs'><span className='font-semibold'>Mobile :</span> {invoiceData.billTo.mobile}</p>
          <p className='text-xs'><span className='font-semibold'>Email :</span> {invoiceData.billTo.email}</p>
        </div>
        <div className='w-1/2 pl-24'>
          <p className='text-xs flex justify-between'><span className='font-semibold'>Invoice Date:</span> {invoiceData.invoiceInfo.invoiceDate}</p>
          <p className='text-xs flex justify-between'><span className='font-semibold'>Invoice Period:</span> {invoiceData.invoiceInfo.invoicePeriod}</p>
          <p className='text-xs flex justify-between'><span className='font-semibold'>Due Date:</span> {invoiceData.invoiceInfo.dueDate}</p>
          <p className='text-xs flex justify-between'><span className='font-semibold'>Place of Supply:</span> {invoiceData.invoiceInfo.placeOfSupply}</p>
        </div>
      </div>

      {/* Items Table */}
      <table className='w-full border-collapse mb-5'>
        <thead>
          <tr className='border-t border-b border-gray-800'>
            <th className='text-left text-xs font-semibold py-2 px-1'>#</th>
            <th className='text-left text-xs font-semibold py-2 px-1'>Item</th>
            <th className='text-right text-xs font-semibold py-2 px-1'>Rate/Item</th>
            <th className='text-right text-xs font-semibold py-2 px-1'>Qty</th>
            <th className='text-right text-xs font-semibold py-2 px-1'>Amount</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.items.map((item) => (
            <tr key={item.id} className='border-b border-gray-300'>
              <td className='text-xs py-2 px-1'>{item.id}</td>
              <td className='text-xs py-2 px-1'>{item.item}</td>
              <td className='text-right text-xs py-2 px-1'>{item.rate.toFixed(2)}</td>
              <td className='text-right text-xs py-2 px-1'>{item.qty}</td>
              <td className='text-right text-xs py-2 px-1'>{item.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bank Details and Payment Summary */}
      <div className='flex justify-between gap-8 mb-5'>
        <div className='w-1/2'>
          <p className='text-xs font-semibold mb-2'>Bank Details:</p>
          <p className='text-xs'><span className='font-semibold'>Bank:</span> {invoiceData.bankDetails.bank}</p>
          <p className='text-xs'><span className='font-semibold'>Account #:</span> {invoiceData.bankDetails.accountNumber}</p>
          <p className='text-xs'><span className='font-semibold'>IFSC:</span> {invoiceData.bankDetails.ifsc}</p>
          <p className='text-xs'><span className='font-semibold'>Branch:</span> {invoiceData.bankDetails.branch}</p>
        </div>

        <div className='flex gap-4 items-start'>
          <div>
            <p className='text-xs font-semibold mb-2'>Pay using UPI</p>
            <div className='border border-gray-300 p-2'>
              <QRCode value={`upi://pay?pa=hisaabsathi@paytm&pn=BUSINESS_NAME&am=${invoiceData.taxDetails.total}&cu=INR&tn=Invoice_${invoiceData.invoiceInfo.invoiceNumber}`} size={80} />
            </div>
          </div>

          <div className='min-w-[200px]'>
            <div className='flex justify-between text-xs py-1'>
              <span>Taxable Amount</span>
              <span>₹{invoiceData.taxDetails.taxableAmount.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-xs py-1'>
              <span>CGST</span>
              <span>₹{invoiceData.taxDetails.cgst.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-xs py-1'>
              <span>SGST</span>
              <span>₹{invoiceData.taxDetails.sgst.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-xs py-1'>
              <span>IGST</span>
              <span>₹{invoiceData.taxDetails.igst.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-xs py-1'>
              <span>Grand Total</span>
              <span>₹{invoiceData.taxDetails.grandTotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-xs py-1'>
              <span>Round Off</span>
              <span>₹{invoiceData.taxDetails.roundOff.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-sm font-semibold py-2 border-t border-b border-gray-800 mt-2'>
              <span>Total</span>
              <span>₹{invoiceData.taxDetails.total.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-xs py-1 mt-2'>
              <span>Amount Payable:</span>
              <span>₹{invoiceData.taxDetails.amountPayable.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-xs py-1'>
              <span>Amount Paid:</span>
              <span>₹{invoiceData.taxDetails.amountPaid.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Amount in Words */}
      <div className='mb-5'>
        <p className='text-xs'><span className='font-semibold'>Total amount (in words) :</span> {invoiceData.amountInWords}</p>
      </div>

      {/* Notes */}
      <div className='mb-5'>
        <p className='text-xs font-semibold mb-2'>Notes:</p>
        <p className='text-xs'>Thank you for the Business!</p>
      </div>

      {/* Terms and Conditions */}
      <div className='mb-5'>
        <p className='text-xs font-semibold mb-2'>Terms and Conditions:</p>
        <ol className='text-xs space-y-0.5'>
          <li>1. All invoices are payable within 15 days from the date of invoice.</li>
          <li>2. Late payments penalty of 2.5% interest per day on the outstanding balance.</li>
          <li>3. Any additional services requested by the client shall be subject to additional fees.</li>
          <li>4. The client retains all rights to materials provided by them for use in the project.</li>
          <li>5. Both parties agree to keep all information exchanged during the project confidential.</li>
          <li>6. This includes, business strategies, trade secrets, & any proprietary information.</li>
          <li>7. Company reserves the right to update these terms and conditions at any time.</li>
          <li>8. This agreement shall be governed by and construed in accordance with the laws.</li>
          <li>9. By accepting this invoice, the client agrees to abide by these terms and conditions.</li>
        </ol>
      </div>

      {/* Signature */}
      <div className='border-t border-gray-800 pt-1 mt-6'>
        <p className='text-xs'>Receiver's Signature</p>
      </div>
    </div>
  );
};

export default CashInvoiceTemplate;