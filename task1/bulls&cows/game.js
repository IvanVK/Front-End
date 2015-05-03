var min = 1000;
var max = 9999;
var num = [];

function getRandomInt(min, max) {
	while(num.length < 4){
		var rand = Math.floor(Math.random() * (max - min)) + min;
		var found = false;
		for(var i = 0;i<num.length;i++){
			if(num[i] == rand){
				found = true;
			}
		}
	if(!found){
		num[num.length] = rand;
	}
	
}
} 


var prompt = require('prompt');
 // var answer = parseInt(prompt("Enter number"));
// var num = 1234;
var bulls = 0;
var cows = 0;

(function ans(){
	prompt.get(['answer'], function (err, result) {
		if(result.answer === num.toString()){
			console.log("success");
			return ;
		}
			for(var i = 0; i<4; i++){
				if(result.answer.charAt(i) === num.toString().charAt(i)){
					bulls++;
				}
			}
			console.log("bulls" + bulls);
			for(var i = 0; i<4; i++) {
				for(var j = 0;j<4; j++) {
					if(result.answer.charAt(i) === num.toString().charAt(j) && i != j) {
			      		cows++;
			      	}
			    }
			}
			    console.log("cows" + cows);

				bulls = 0;
				cows = 0;
				ans();

		})
}());