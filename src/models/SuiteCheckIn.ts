import { Schema, model } from 'mongoose';

const suiteCheckInSchema = new Schema({
  Date: { type: Date, default: () => new Date() },
  BookingStatus: { type: String, required: true },
  CustomerName: { type: String, required: true },
  RoomCategory: { type: String, required: true },
  RoomPrice: { type: Number, required: true },
  Period: { type: Number, required: true },
  StartDate: { type: Date, default: () => new Date() },
  EndDate: { type: Date, default: () => new Date() },
  Rate: { type: Number, required: true },
  Amount: { type: Number, required: true },
  Discount: { type: Number, required: true },
  Total: { type: Number, required: true },
  Cash: { type: Number, required: true },
  Pos: { type: Number, required: true },
  Transfer: { type: Number, required: true },
  Balance: { type: Number, required: true },
  Credit: { type: Number, required: true },
  UserName: { type: String, required: true },
  ShiftDate: { type: Date, required: true },
  CleanStatus: { type: String, required: true },
}, {
  timestamps: true
});

export default model('SuiteCheckIn', suiteCheckInSchema);
