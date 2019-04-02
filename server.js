const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
console.log(path.join(__dirname, 'www/dist'))
app.use(serveStatic(path.join(__dirname, 'www/dist')));
const port = process.env.PORT || 80;
console.log("port:",port)
app.listen(port);
