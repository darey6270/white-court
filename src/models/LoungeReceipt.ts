import { Schema, model, Document } from 'mongoose';

// 1. Define the interface for the receipt document
export interface IReceipt extends Document {
  Date: Date;
  ShiftDate: Date;
  OrderCode: string;
  CaptainCode: string;
  Total: number;
  Cash: number;
  Pos: number;
  Transfer: number;
  Credit: number;
  Balance: number;
  Tax: number;
  TaxPercent: number;
  TotalSubTax: number;
  Discount: number;
  ReceiptBy: string;
  SalesPoint: string;
  ShiftNo: string;
  Department: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// 2. Define the schema
const receiptSchema = new Schema<IReceipt>({
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
  timestamps: true // adds createdAt and updatedAt automatically
});

// 3. Export the model with type
const LoungeReceipt = model<IReceipt>('LoungeSalesReceipt', receiptSchema);
export default LoungeReceipt;
