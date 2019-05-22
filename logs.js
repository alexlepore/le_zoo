let logs = {
    server_info : function(req){
        console.log("________________");
        console.log("Method Type, HTTPS ?, URL Build");
        console.log(req.method);
        console.log(req.path);
        console.log(req.secure);
        console.log(req.protocol + "://www." + req.hostname + req.path);
        console.log(req.ip);
        console.log("________________" + "\n");
    }
}

module.exports = logs;