import { Request, Response } from 'express';
import SuiteCheckIn from '../models/SuiteCheckIn';

export const createSuiteCheckIn = async (req: Request, res: Response) => {
  const entry = new SuiteCheckIn(req.body);
  await entry.save();
  res.status(201).json(entry);
};

export const getSuiteCheckIns = async (_req: Request, res: Response) => {
  const entries = await SuiteCheckIn.find();
  res.json(entries);
};

export const getSuiteCheckIn = async (req: Request, res: Response) : Promise<any> => {
  const entry = await SuiteCheckIn.findById(req.params.id);
  if (!entry) return res.status(404).json({ message: 'Not found' });
  res.json(entry);
};

export const updateSuiteCheckIn = async (req: Request, res: Response) : Promise<any> => {
  const updated = await SuiteCheckIn.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
};

export const deleteSuiteCheckIn = async (req: Request, res: Response) : Promise<any> => {
  const deleted = await SuiteCheckIn.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted successfully' });
};
