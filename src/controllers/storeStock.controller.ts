import { Request, Response } from 'express';
import StoreStock from '../models/StoreStock';

export const getStoreStocksByShiftDateRange = async (req: Request, res: Response) : Promise<any> => {
  const { from, to } = req.query;

  // Validate the inputs
  if (!from || !to) {
    return res.status(400).json({ message: 'Both from and to dates are required.' });
  }

  try {
    const fromDate = new Date(from as string);
    const toDate = new Date(to as string);

    const receipts = await StoreStock.find({
      ShiftDate: {
        $gte: fromDate,
        $lte: toDate,
      }
    });

    res.json(receipts);
  } catch (err) {
    console.error('Error fetching store stocks by shift date range:', err);
    res.status(500).json({ message: 'Server error while fetching store stocks by shift date range' });
  }
};

export const createStoreStock = async (req: Request, res: Response) => {
  const stock = new StoreStock(req.body);
  await stock.save();
  res.status(201).json(stock);
};

export const getStoreStocks = async (_req: Request, res: Response) => {
  const stocks = await StoreStock.find();
  res.json(stocks);
};

export const getStoreStock = async (req: Request, res: Response) : Promise<any> => {
  const stock = await StoreStock.findById(req.params.id);
  if (!stock) return res.status(404).json({ message: 'Store stock not found' });
  res.json(stock);
};

export const updateStoreStock = async (req: Request, res: Response) : Promise<any> => {
  const updated = await StoreStock.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Store stock not found' });
  res.json(updated);
};

export const deleteStoreStock = async (req: Request, res: Response) : Promise<any> => {
  const deleted = await StoreStock.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Store stock not found' });
  res.json({ message: 'Deleted successfully' });
};
