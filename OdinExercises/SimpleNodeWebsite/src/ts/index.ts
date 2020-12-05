import express from 'express';
import * as path from 'path';

const app = express();
const port = 8080;

const indexPagePaths = ['/', '/index'];
app.get(indexPagePaths, (request, result) => {
    result.sendFile(path.resolve(__dirname, '../html/index.html'));
});

app.get('/about', (request, result) => {
    result.sendFile(path.resolve(__dirname, '../html/about.html'));
});

app.get('/contact-me', (request, result) => {
    result.sendFile(path.resolve(__dirname, '../html/contact-me.html'));
});

app.use((request, result) => {
    result.status(404).sendFile(path.resolve(__dirname, '../html/404.html'));
});

app.listen(port);

