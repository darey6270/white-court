import { Schema, model } from 'mongoose';

const storeReceiptSchema = new Schema({
  Date: { type: Date, default: () => new Date() },
  ShiftDate: { type: Date, default: () => new Date() },
  OrderCode: { type: String, required: true },
  CaptainCode: { type: String, required: true },
  Total: { type: Number, required: true },
  Cash: { type: Number, required: true },
  Pos: { type: Number, required: true },
  Transfer: { type: Number, required: true },
  Credit: { type: Number, required: true },
  Balance: { type: Number, required: true },
  Tax: { type: Number, required: true },
  TaxPercent: { type: Number, required: true },
  TotalSubTax: { type: Number, required: true },
  Discount: { type: Number, required: true },
  ReceiptBy: { type: String, required: true },
  SalesPoint: { type: String, required: true },
  ShiftNo: { type: String, required: true },
  Department: { type: String, required: true },
}, {
  timestamps: true
});

export default model('StoreSalesReceipt', storeReceiptSchema);
