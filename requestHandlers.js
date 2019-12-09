var exec = require('child_process').exec;


function start(res) {
    console.log('req handler start was called.')
    exec('ls -lah', function(error, stdout,stderr){
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.write(stdout);
        res.end();
    });
};

function upload() {
    console.log("Request handler 'upload' was called."); response.writeHead(200, {'Content-Type' : 'text/plain'}); response.write('Hello Upload');
    response.end();
};

exports.start = start;
exports.upload = upload;