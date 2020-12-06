import express from 'express';
import * as path from 'path';
import Product from '../utils/types/product';

export const router = express.Router();

export const products: Product[] = [];

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../views/add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    const newProduct = { title: req.body.title };
    products.push(newProduct);

    res.redirect('/');
});
