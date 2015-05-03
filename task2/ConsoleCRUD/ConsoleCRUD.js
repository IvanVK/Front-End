


var people = [{
		'id':'100',
		'name':'ivan',
		'email':'ivan@mail.com'
	},
	{
		'id':'101',
		'name':'marian',
		'email':'marian@mail.com'
	},
	{
		'id':'102',
		'name':'svet',
		'email':'svet@mail.com'
	}
	];

function display(people){
	for(var person in people){
		console.log(people[person]);
	}
}

function addPeople(obj, people){
	people.push(obj);
}

function promptMenu(prompt){
	var prompt = require('prompt');
	prompt.start();
		prompt.get(['choise'], function (err, result) {
			var u_choise = result.choise;
			switch(u_choise) {
			    case "list":
			        display(people);
			        promptMenu();
			        break;
			    case "add":
			    	var command2 = require('command');
					command2.start();
					command2.get(['id', 'name', 'email'], function (err, result){
						addPeople({'id':result.id,
							'name':result.name,
							'email':result.email}, people);
			 			console.log('objects added');
			        });

			        
			        promptMenu();
			        break;

			    default:
			    	console.log("by default :D");
 }
		
})
}

promptMenu();