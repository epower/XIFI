var http =  require("http"),
express = require("express");

var app  = express();
app.configure(function () {
    "use strict";
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    app.use(express.logger());
    app.use(express.static("public"));
    //app.set('views', __dirname + '/../views/');
    //disable layout
    //app.set("view options", {layout: false});
});
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
  res.render('index')
});

app.listen(80);

