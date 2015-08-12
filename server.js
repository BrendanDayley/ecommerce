/* global process */
'use strict';

//dependancies
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

//
var app = express();
var port = process.argv[2] || 8080;

//	DATABASE
var db = mongojs('ecommerse', [''])
//middleware
app.use(bodyParser.json());
app.use(cors());

//crud
app.get('/api/products', function(req, res){
	console.log('get');
})

app.post('/api/products', function(req,res){
	console.log('post');
})

app.put('/api/products', function(req, res){
	console.log('put');
})

app.delete('/api/products', function(req, res){
	console.log('delete');
})

app.listen(port, function(){
	console.log('Listening on port: ', port);
})