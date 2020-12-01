import express from 'express';
import * as path from 'path';

const app = express();
const port = 8080;

const indexPagePaths = ['/', '/index'];
const getForIndexPagePath = (indexPath: string) => {
    app.get(indexPath, (request, result) => {
        result.sendFile(path.resolve(__dirname, '../html/index.html'));
    });
};

indexPagePaths.forEach(indexPath => getForIndexPagePath(indexPath));

app.get('/about', (request, result) => {
    result.sendFile(path.resolve(__dirname, '../html/about.html'));
});

app.get('/contact-me', (request, result) => {
    result.sendFile(path.resolve(__dirname, '../html/contact-me.html'));
});

app.get('*', (request, result) => {
    result.status(404).sendFile(path.resolve(__dirname, '../html/404.html'));
});

app.listen(port);

