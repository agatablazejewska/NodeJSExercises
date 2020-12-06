import express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as adminData from './routes/admin';
import * as shopData from './routes/shop';

const app = express();
const port = 9000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router);
app.use(shopData.router);

app.use((req, res, next) => {
    res.status(404).sendFile(path.resolve(__dirname, './views/404Page.html'));
});

app.listen(port);
