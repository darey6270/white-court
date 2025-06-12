import User from '../models/User';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { RequestHandler } from 'express';

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.status(201).json({ message: 'User registered' });
};

export const login = async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
  return res.json({ token });
};

// Request password reset (simulated by returning a token)
export const requestPasswordReset = async (req: Request, res: Response) : Promise<any> => {
  const { username } = req.body;
  const user = await User.findOne({ username });

  if (!user) return res.status(404).json({ message: 'User not found' });

  // Generate password reset token (expires in 15 minutes)
  const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, { expiresIn: '15m' });

  // In a real app, you'd send this token via email/SMS
  return res.json({ message: 'Password reset token generated', resetToken });
};

// Reset password with token
export const resetPassword = async (req: Request, res: Response) : Promise<any> => {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string };
    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ message: 'User not found' });

    user.password = newPassword;
    await user.save();

    return res.json({ message: 'Password successfully reset' });
  } catch (err) {
    return res.status(400).json({ message: 'Invalid or expired token' });
  }
};

