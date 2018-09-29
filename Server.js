//content of server.js
const http = require('http');
const url = require("url");

const port = 3000;

const requestHandler = (request, response) => {
    console.log(request.url);
    //"/hello/:name" - Entrada
    //{"hello": "<name>"} - Salida


    var q = url.parse(request.url, true).query;
    var name = q.name;

    //response.writeHead(200, {'content-Type}': 'text/html'});
    response.end(`{"hello:" "` + name + '"}');

}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        return console.log("something bad happened", err);
    }

    console.log(`server is listening on ${port}`);
} )