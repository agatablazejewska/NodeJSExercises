import express from 'express';

export const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>Hello from Express!</h1>');
});
