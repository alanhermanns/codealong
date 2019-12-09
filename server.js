var http = require('http');
var url = require('url');

function start(route, handle) {
function onRequest(req, res) {
    const pathname = url.parse(req.url).pathname;
    console.log(`req for ${pathname} recieved`);
    route(handle, pathname, res);
};

http.createServer(onRequest).listen(8888);
console.log('server has started');

}

exports.start = start;


