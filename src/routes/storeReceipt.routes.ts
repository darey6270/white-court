import { Router } from 'express';
import {
  createStoreReceipt,
  getStoreReceipts,
  getStoreReceipt,
  updateStoreReceipt,
  deleteStoreReceipt,
} from '../controllers/storeReceipt.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/', createStoreReceipt);
router.get('/', getStoreReceipts);
router.get('/:id', getStoreReceipt);
router.put('/:id', updateStoreReceipt);
router.delete('/:id', deleteStoreReceipt);

export default router;
