//Здесь надо описывать все глобальные переменные
//потом с помощью exports.* сделать общим для всех модулей
var express = require('express');
var app = express();
var mysql = require('mysql');

exports.app = app;
exports.mysql = mysql;