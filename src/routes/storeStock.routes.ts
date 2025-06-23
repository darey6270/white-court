import { Router } from 'express';
import {
  createStoreStock,
  getStoreStocks,
  getStoreStock,
  updateStoreStock,
  deleteStoreStock,
  getStoreStocksByShiftDateRange
} from '../controllers/storeStock.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

// router.post('/', createStoreStock);
router.get('/', getStoreStocks);
router.get('/:id', getStoreStock);
// router.put('/:id', updateStoreStock);
// router.delete('/:id', deleteStoreStock);
router.get('/filter/by-shift-date', getStoreStocksByShiftDateRange);

export default router;
