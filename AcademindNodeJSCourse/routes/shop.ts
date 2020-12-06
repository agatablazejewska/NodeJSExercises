import express from 'express';
import { products } from './admin';

export const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('shop', { productList: products, pageTitle: 'Shop', path: '/' });
});
