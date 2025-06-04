import { Request, Response } from 'express';
import Stock from '../models/Stock';

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
