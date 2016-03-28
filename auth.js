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
Var.app.get("/generateId", function(request, response) {
    //по хорошему нужно создать отдельное приложение на с++, которые генерирует случайный ключ
    var checkID = function () {
        var ID = generateNewID();
        var query = "INSERT INTO auth_users(generated_id) VALUES('" + ID + "');";
        sql.main(query, function (error, body) {
            if (error) {
                checkID();
            } else {
                var answerBody = {
                    result: "success",
                    description: "success creating new device ID",
                    body: {
                        "id": ID
                    }
                }
                response.send(JSON.stringify(answerBody));
            }
        });
    }
    checkID();
});


//После того, как пользователь получил от нас GID, он хочет зарегаться
Var.app.post("/createUser", function (request, response) {
    var body = request.body;
    var phone = body.phone;
    var generatedID = body.generatedID;
    if (!generatedID) {
        var answer = {
            error: "some params is missing",
            description: "generatedID is missing"
        }
        response.send(JSON.stringify(answer));
        return;
    }
    var regEXPPhone = phone.match(/9[\d]{9,9}/);
    if (regEXPPhone === null) {
        var answer = {
            error: "wrong phone number format",
            description: "Неверный формат номера телефона"
        }
        response.send(JSON.stringify(answer));
    }

    response.send("test");
});