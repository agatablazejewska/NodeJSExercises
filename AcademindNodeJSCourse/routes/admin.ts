import express from 'express';
import * as path from 'path';

export const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../views/add-product.html'))
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});