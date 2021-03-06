const http = require('http');
const fs = require('fs');
const readFN = require('./apiOperations/readFN.js');
const deleteFN = require('./apiOperations/deleteFN.js');
const createFN = require('./apiOperations/createFN.js');
const updateFN = require('./apiOperations/updateFN.js');


const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(`url: ${url}. method: ${method}`);
    switch (url) {
        case '/home': fs.createReadStream('./views/home/index.html').pipe(res);
            break;
        case '/read': fs.createReadStream('./views/pages/read.html').pipe(res);
            break;
        case '/read.js': fs.createReadStream('./views/pages/read.js').pipe(res);
            break;
        case '/create': fs.createReadStream('./views/pages/create.html').pipe(res);
            break;
        case '/create.js': fs.createReadStream('./views/pages/create.js').pipe(res);
            break;
        case '/update': fs.createReadStream('./views/pages/update.html').pipe(res);
            break;
        case '/update.js': fs.createReadStream('./views/pages/update.js').pipe(res);
            break;
        case '/delete': fs.createReadStream('./views/pages/delete.html').pipe(res);
            break;
        case '/delete.js': fs.createReadStream('./views/pages/delete.js').pipe(res);
            break;
        case '/home/index.js': fs.createReadStream('./views/home/index.js').pipe(res);
            break;

        //API Operations:
        case '/api/student':
            // fs.createReadStream('./apiOperatios/readFN.js').pipe(res);
            if (method === 'GET') {
                const student = readFN();
                res.end(JSON.stringify({ student }))
            
            } else if (method === 'DELETE') {
                const chekDelete = deleteFN();
                res.end(JSON.stringify({ chekDelete }))
            
            } else if (method === 'POST') {
                req.on('data', (data) => {console.log(JSON.parse(data, "utf-8"))})
                const create = createFN();
                res.end(JSON.stringify({ create }))
            }

            else if(method === 'PUT') {
                const update = updateFN();
                res.end(JSON.stringify({ update }))
            }
            break;
        case '/404.js': fs.createReadStream('./views/404/404.js').pipe(res);
            break;
        default: fs.createReadStream('./views/404/404.html').pipe(res);
            break;
    }

})

server.listen(1234); //http://localhost:1234 // http://127.0.0.1:1234
console.log('server listening on 1234');