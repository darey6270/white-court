import { Request, Response } from 'express';
import StoreReceipt from '../models/StoreReceipt';

export const getStockReceiptsByShiftDateRange = async (req: Request, res: Response) : Promise<any> => {
  const { from, to } = req.query;

  // Validate the inputs
  if (!from || !to) {
    return res.status(400).json({ message: 'Both from and to dates are required.' });
  }

  try {
    const fromDate = new Date(from as string);
    const toDate = new Date(to as string);

    const receipt = await StoreReceipt.find({
      ShiftDate: {
        $gte: fromDate,
        $lte: toDate,
      }
    });

    res.json(receipt);
  } catch (err) {
    console.error('Error fetching StoreReceipts by shift date range:', err);
    res.status(500).json({ message: 'Server error while fetching StoreReceipts by shift date range' });
  }
};

export const createStoreReceipt = async (req: Request, res: Response) => {
  const receipt = new StoreReceipt(req.body);
  await receipt.save();
  res.status(201).json(receipt);
};

export const getStoreReceipts = async (_req: Request, res: Response) => {
  const receipts = await StoreReceipt.find();
  res.json(receipts);
};

export const getStoreReceipt = async (req: Request, res: Response) : Promise<any> => {
  const receipt = await StoreReceipt.findById(req.params.id);
  if (!receipt) return res.status(404).json({ message: 'Store receipt not found' });
  res.json(receipt);
};

export const updateStoreReceipt = async (req: Request, res: Response) : Promise<any> => {
  const updated = await StoreReceipt.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Store receipt not found' });
  res.json(updated);
};

export const deleteStoreReceipt = async (req: Request, res: Response) : Promise<any> => {
  const deleted = await StoreReceipt.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Store receipt not found' });
  res.json({ message: 'Deleted successfully' });
};
