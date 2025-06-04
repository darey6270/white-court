import { Schema, model } from 'mongoose';

const storeStockSchema = new Schema({
  Date: { type: Date, default: () => new Date() },
  ShiftDate: { type: Date, default: () => new Date() },
  OrderCode: { type: String, required: true },
  CaptainCode: { type: String, required: true },
  StockName: { type: String, required: true },
  Qty: { type: Number, required: true },
  Unit: { type: String, required: true },
  TotalQty: { type: Number, required: true },
  Rate: { type: Number, required: true },
  Amount: { type: Number, required: true },
  CostAmount: { type: Number, required: true },
  ReceiptBy: { type: String, required: true },
  SalesPoint: { type: String, required: true },
  ShiftNo: { type: String, required: true },
  Department: { type: String, required: true },
}, {
  timestamps: true
});

export default model('StoreStock', storeStockSchema);
