import { Router } from 'express';
import {
  createReceipt,
  getReceipts,
  getReceipt,
  updateReceipt,
  deleteReceipt
} from '../controllers/receipt.controller';


import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/', createReceipt);
router.get('/', getReceipts);
router.get('/:id', getReceipt);
router.put('/:id', updateReceipt);
router.delete('/:id', deleteReceipt);

export default router;
