import { Router } from 'express';
import {
  createStock,
  getStocks,
  getStock,
  updateStock,
  deleteStock,
  getStocksByShiftDateRange,
  getFilteredStocks,
} from '../controllers/loungeStock.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// router.use(authenticate); // All routes below require auth

router.post('/', createStock);
router.get('/', getStocks);
router.get('/:id', getStock);
router.put('/:id', updateStock);
router.delete('/:id', deleteStock);
router.get('/filter/by-shift-date', getStocksByShiftDateRange);
router.get('/filter/stocks', getFilteredStocks);
export default router;
