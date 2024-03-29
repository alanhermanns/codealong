var handle = require('./requestHandlers')

function route(handle, pathname, res) {
    console.log(`about to route a request for ${pathname}`);
    if(typeof handle[pathname] === 'function'){
       return handle[pathname](res);
    }
    else{
        console.log(`no req handler found for ${pathname}`)
        res.writeHead(404, {'Content-Type' : 'text/plain' });
        res.write('404 not found');
        res.end();
    }
}

exports.route = route;