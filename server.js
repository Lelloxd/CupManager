const express = require('express');
const serveStatic = require("serve-static")
var history = require('connect-history-api-fallback');
const path = require('path');
app = express();
console.log(path.join(__dirname, 'www/dist'))
app.use(history());
app.use(serveStatic(path.join(__dirname, 'www/dist')));
const port = process.env.PORT || 80;
console.log("port:",port)
app.listen(port);
