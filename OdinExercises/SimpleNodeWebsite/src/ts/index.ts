import express from 'express';
import * as path from 'path';

const app = express();
const port = 8080;

const indexPagePaths = ['/', '/index.html'];
const getForIndexPagePath = (indexPath: string) => {
    app.get(indexPath, (request, result) => {
        result.sendFile(path.resolve(__dirname, '../html/index.html'));
    });
};
    
indexPagePaths.forEach(indexPath => getForIndexPagePath(indexPath));

app.get('/about.html', (request, result) => {
    result.sendFile(path.resolve(__dirname, '../html/about.html'));
});

app.get('/contact-me.html', (request, result) => {
    result.sendFile(path.resolve(__dirname, '../html/contact-me.html'));
});

app.listen(port);

