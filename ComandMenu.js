console.log("Hello wolrd");

var people = [];


var input = require('prompt');
input.start();

function startPrompt() {
	input.get(['comand'], function(err, result) {
		var myComand = result.comand;
		switch (myComand) {
			case 'list': 
				list();
				break;

			case 'add':
				add(input);
				break;

			case 'quit':
				break;

			case 'get':
				var g = require('prompt');
				g.start();
				g.get(['id'], function (err, result) {
					var i = result.id;
					get(i);
				});
				break;

			case 'remove':
				var remove = require('prompt');
				remove.start();
				remove.get(['id'], function (err, result) {
					var i = result.id;
					rem(i);
				});
				break;

			case 'update':
				var update = require('prompt');
				update.start();
				update.get(['id'], function (err, result) {
					var i = result.id;
					upd(i);
				});

	}


	});

	
}

function addingElement(person) {
	people.push(person);
}

function add(input) {
	input.start();
	input.get(['id', 'firstname', 'email'], function(err, result) {
		addingElement({"id": result.id, "firstname": result.firstname, "email":result.email});
		startPrompt();
	});

}

function list() {
	console.log('id   , firstname ,  email');
	for (var person in people) {
		console.log(people[person].id + ', ' + people[person].firstname + ', ' + people[person].email);
	}
	startPrompt();
}

function get(id) {
	for (var person in people) {
		if (people[person].id === id) {
			console.log(people[person].id + ', ' + people[person].firstname + ', ' + people[person].email);
		}
		
	}
	startPrompt();
}

function rem(id) {
	for (var person in people) {
		if (people[person].id === id) {
			// console.log("yes")
			people.splice(person, 1);
		}
		
	}
	startPrompt();
}

function upd(id) {
	for (var person in people) {
		if (people[person].id === id) {
			console.log("1")
			var wantedField = require('prompt');
			wantedField.start();
			wantedField.get(['field'], function (err, result) {
				console.log("4")
				var i = result.field;
				if (i === "firstname") {
					console.log("2")
					var newField = require('prompt');
					newField.start();
					newField.get(['firstname'], function (err, result) {
						var i = result.firstname;
						people[person].firstname = i;
					});
				} else {
					console.log("3")
					var newField = require('prompt');
					newField.start();
					newField.get(['email'], function (err, result) {
						var i = result.email;
						people[person].email = i;
					});
				}
			});
		}
		
	}
	startPrompt();
}

startPrompt();