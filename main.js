import * as gogo from './completeDocument.js';
import * as http from 'http';

const server = http.createServer(async (req, res) => {
    
    const url = new URL(req.url, `http://${req.headers.host}`);
    const queryParams = new URLSearchParams(url.search);
    const qParam = queryParams.get('q');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end(await gogo.go(qParam));
     
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

/*
const oCompl = require ('./completeDocument.js');

oCompl.printMsg();
*/


