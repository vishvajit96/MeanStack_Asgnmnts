const http = require("http");
const mod = require("./my.module4");

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");   //for providing the access

    const myjson = JSON.stringify(mod.sample);
    res.end(myjson);
})

    .listen(5601);