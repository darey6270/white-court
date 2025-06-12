import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import receiptRoutes from './routes/receipt.routes';
import stockRoutes from './routes/stock.routes';
import storeReceiptRoutes from './routes/storeReceipt.routes';
import storeStockRoutes from './routes/storeStock.routes';
import suiteCheckInRoutes from './routes/suiteCheckIn.routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/auth', authRoutes);
app.use('/api/receipts', receiptRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/store-receipts', storeReceiptRoutes);
app.use('/api/store-stocks', storeStockRoutes);
app.use('/api/suite-checkin', suiteCheckInRoutes);

export default app;
