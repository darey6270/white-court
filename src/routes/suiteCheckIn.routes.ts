import { Router } from 'express';
import {
  createSuiteCheckIn,
  getSuiteCheckIns,
  getSuiteCheckIn,
  updateSuiteCheckIn,
  deleteSuiteCheckIn,
} from '../controllers/suiteCheckIn.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.use(authenticate);

router.post('/', createSuiteCheckIn);
router.get('/', getSuiteCheckIns);
router.get('/:id', getSuiteCheckIn);
router.put('/:id', updateSuiteCheckIn);
router.delete('/:id', deleteSuiteCheckIn);

export default router;
