"use strict";

var express = require('express');
//var server = express.createServer();
// express.createServer()  is deprecated. 
var server = express(); // better instead

server.set('view engine', 'ejs');
server.set('views',__dirname+'/public/views');

server.use('/', express.static(__dirname+'/public' ));

server.get ('/', function (req, res)
{
	res.redirect ('/home');
});

server.get ('/:page', function (req, res)
{
	res.render ('index', {
		page: req.params.page,
		link: req.path
	});
});

server.listen(3000);