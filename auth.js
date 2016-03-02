/*
* Здесь будут все функции, которые связаны с логикой авторизации
*/
var Var = require("./variables.js");
var sql = require('./sql.js');

Var.app.get("/newUser", function(request, response){
	response.send("asdf");
});

var generateNewID = function () {
	var template = "0123456789abcdefghijklmnopqrstuvwxyz";
	var answerString = "";
	for (var i = 0; i < 10; i ++) {
		answerString += template[Math.floor(Math.random() * 36)];
	}
	return answerString;
}

//После открытия приложения посылается запрос 
//на создание идентификатора для новго оборудования
Var.app.post("/getGeneratedId", function(request, response) {
	//по хорошему нужно создать отдельное приложение на с++, которые генерирует случайный ключ
	response.send("asdf");
});