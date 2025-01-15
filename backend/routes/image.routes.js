import express from 'express';
import upload from '../middleware/multerConfig.js';
import { uploadImages, getImages } from '../controllers/imageController.controller.js';

const router = express.Router();

router.post('/upload', upload.array('images', 10), uploadImages);

router.get('/', getImages);

export default router;
