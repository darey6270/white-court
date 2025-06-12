import { Request, Response } from 'express';
import Stock from '../models/LoungeStock';

export const getFilteredStocks = async (req: Request, res: Response): Promise<any> => {
  const { salesPoint, from, to } = req.query;

  if (!salesPoint || !from || !to) {
    return res.status(400).json({ message: 'salesPoint, from, and to parameters are required.' });
  }

  try {
    const fromDate = new Date(from as string);
    const toDate = new Date(to as string);

    const receipts = await Stock.find({
      SalesPoint: salesPoint,
      ShiftDate: {
        $gte: fromDate,
        $lte: toDate,
      },
    });

    res.json(receipts);
  } catch (err) {
    console.error('Error filtering stocks:', err);
    res.status(500).json({ message: 'Server error while filtering stocks' });
  }
};
export const getStocksByShiftDateRange = async (req: Request, res: Response) : Promise<any> => {
  const { from, to } = req.query;

  // Validate the inputs
  if (!from || !to) {
    return res.status(400).json({ message: 'Both from and to dates are required.' });
  }

  try {
    const fromDate = new Date(from as string);
    const toDate = new Date(to as string);

    const stocks = await Stock.find({
      ShiftDate: {
        $gte: fromDate,
        $lte: toDate,
      }
    });

    res.json(stocks);
  } catch (err) {
    console.error('Error fetching stocks by shift date range:', err);
    res.status(500).json({ message: 'Server error while fetching stocks by shift date range' });
  }
};

export const createStock = async (req: Request, res: Response) => {
  const stock = new Stock(req.body);
  await stock.save();
  res.status(201).json(stock);
};

export const getStocks = async (_req: Request, res: Response) => {
  const stocks = await Stock.find();
  res.json(stocks);
};

export const getStock = async (req: Request, res: Response) : Promise<any> => {
  const stock = await Stock.findById(req.params.id);
  if (!stock) return res.status(404).json({ message: 'Stock not found' });
  res.json(stock);
};

export const updateStock = async (req: Request, res: Response) : Promise<any> => {
  const updated = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Stock not found' });
  res.json(updated);
};

export const deleteStock = async (req: Request, res: Response) : Promise<any> => {
  const deleted = await Stock.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Stock not found' });
  res.json({ message: 'Deleted successfully' });
};
