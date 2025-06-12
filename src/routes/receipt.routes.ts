import { Router } from 'express';
import {
  createReceipt,
  getReceipts,
  getReceipt,
  updateReceipt,
  deleteReceipt,
  getReceiptsByShiftDateRange,
  getFilteredReceipts,
} from '../controllers/loungeReceipt.controller';


import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

// router.use(authenticate);

router.post('/', createReceipt);
router.get('/', getReceipts);
router.get('/:id', getReceipt);
router.put('/:id', updateReceipt);
router.delete('/:id', deleteReceipt);
router.get('/filter/by-shift-date', getReceiptsByShiftDateRange);
router.get('/filter/receipts', getFilteredReceipts);

export default router;
