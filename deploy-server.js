var express = require("express");

var app = express();

app.use("/node_modules",
    express.static("/usr/src/mystore/node_modules"));
app.use("/", express.static("/usr/src/mystore/app"));

app.listen(8080, function () {
    console.log("HTTP Server running on port 8080");
});
