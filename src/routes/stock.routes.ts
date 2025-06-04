import { Router } from 'express';
import {
  createStock,
  getStocks,
  getStock,
  updateStock,
  deleteStock,
} from '../controllers/stock.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate); // All routes below require auth

router.post('/', createStock);
router.get('/', getStocks);
router.get('/:id', getStock);
router.put('/:id', updateStock);
router.delete('/:id', deleteStock);

export default router;
