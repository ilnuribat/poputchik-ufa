/*
*
*/

var Var = require('./variables.js');
var sql = require('./sql.js');
var queue = require('./makeQueue.js');
	
//Выдача состояния очереди в указанном направлении
Var.app.get('/data', function(request, response) {
	var query = Var.url.parse(request.url).query;
	var params = Var.queryString.parse(query);
	var direction = params["direction"] - 0;
	var date = params["date"] - 0;

	if (isNaN(date) || date < 0) {
		response.send("unknown date");
		return;
	}

	if (isNaN(direction)) {
		response.send("no direction is set up");
		return;
	}
	response.send("not added");
});

//Регистрация водителя, пассажира
//На будущее: проверить номера. Номер должен быт 9-значным. Не должен совпадать в базе
Var.app.post('/registration', function(request, response) {
	var body = request.body;
	var name = body['name'];
	var phone = body['phone'];
	var human = body['human'];

	response.send("not added");
});