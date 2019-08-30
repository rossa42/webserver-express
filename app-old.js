const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-type': 'application/json' });

    let salida = {
        nombre: 'Rossana',
        edad: 32,
        url: req.url
    }
    resp.write(JSON.stringify(salida));
    resp.end();
}).listen(8082);
console.log(`Escuchando puerto 8082`);