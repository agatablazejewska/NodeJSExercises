import express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { router as adminRoutes } from './routes/admin';
import { router as shopRoutes } from './routes/shop';

const app = express();
const port = 9000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.resolve(__dirname, './views/404Page.html'));
});

app.listen(port);