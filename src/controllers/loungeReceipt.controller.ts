import Receipt from '../models/LoungeReceipt';
import { Request, Response } from 'express';



export const getFilteredReceipts = async (req: Request, res: Response): Promise<any> => {
  const { salesPoint, from, to } = req.query;

  if (!salesPoint || !from || !to) {
    return res.status(400).json({ message: 'salesPoint, from, and to parameters are required.' });
  }

  try {
    const fromDate = new Date(from as string);
    const toDate = new Date(to as string);

    const receipts = await Receipt.find({
      SalesPoint: salesPoint,
      ShiftDate: {
        $gte: fromDate,
        $lte: toDate,
      },
    });

    res.json(receipts);
  } catch (err) {
    console.error('Error filtering receipts:', err);
    res.status(500).json({ message: 'Server error while filtering receipts' });
  }
};


export const getReceiptsByShiftDateRange = async (req: Request, res: Response) : Promise<any> => {
  const { from, to } = req.query;

  // Validate the inputs
  if (!from || !to) {
    return res.status(400).json({ message: 'Both from and to dates are required.' });
  }

  try {
    const fromDate = new Date(from as string);
    const toDate = new Date(to as string);

    const receipts = await Receipt.find({
      ShiftDate: {
        $gte: fromDate,
        $lte: toDate,
      }
    });

    res.json(receipts);
  } catch (err) {
    console.error('Error fetching receipts by shift date range:', err);
    res.status(500).json({ message: 'Server error while fetching receipts by shift date range' });
  }
};

export const createReceipt = async (req: Request, res: Response) => {
  try {
    const receipt = new Receipt(req.body);
    await receipt.save();
    res.status(201).json(receipt);
  } catch (err) {
    console.error('Error creating receipt:', err);
    res.status(500).json({ message: 'Server error while creating receipt' });
  }
};

export const getReceipts = async (_req: Request, res: Response) => {
  try {
    const receipts = await Receipt.find();
    res.json(receipts);
  } catch (err) {
    console.error('Error fetching receipts:', err);
    res.status(500).json({ message: 'Server error while fetching receipts' });
  }
};

export const getReceipt = async (req: Request<{ id: string }>, res: Response) : Promise<any> => {
  try {
    const receipt = await Receipt.findById(req.params.id);
    if (!receipt) return res.status(404).json({ message: 'Receipt not found' });
    res.json(receipt);
  } catch (err) {
    console.error('Error fetching receipt:', err);
    res.status(500).json({ message: 'Server error while fetching receipt' });
  }
};

export const updateReceipt = async (req: Request<{ id: string }>, res: Response) : Promise<any> => {
  try {
    const updated = await Receipt.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Receipt not found for update' });
    res.json(updated);
  } catch (err) {
    console.error('Error updating receipt:', err);
    res.status(500).json({ message: 'Server error while updating receipt' });
  }
};

export const deleteReceipt = async (req: Request<{ id: string }>, res: Response) : Promise<any> => {
  try {
    const deleted = await Receipt.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Receipt not found for deletion' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    console.error('Error deleting receipt:', err);
    res.status(500).json({ message: 'Server error while deleting receipt' });
  }
};
