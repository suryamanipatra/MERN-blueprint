import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './config/database.config.js';
import imageRoutes from './routes/image.routes.js';
import { errorHandler } from './utils/errorHandler.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

connectDatabase();

app.use('/api/images', imageRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
