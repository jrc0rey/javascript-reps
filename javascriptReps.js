// Round 1
var strings = []
var lengths = function(arrayOfStrings){
	for(var i = 0; i < arrayOfStrings.length; i++){
		strings.push(arrayOfStrings[i].length);
	}

	console.log(strings);
}

// Round 2

var transmogrifier = function(a,b,c){
	return Math.pow(a*b,c);
}

// Round 3

var toonify = function(accent,sentence){
	if(accent === "daffy"){
		var newSentence = sentence.replace(/s/gi,"th");
	}
	else if(accent === "elmer"){
		var newSentence = sentence.replace(/r/gi,"w");
	}

	else {
		console.log(sentence);
	}
	
	console.log(newSentence);
}

//Round 4

var wordReverse = function(string){
	var strSplit = string.split(" ");
		var reverseStr = strSplit.reverse().join(' ');
				
			console.log(reverseStr);
		}

//Round 5

var letterReverse = function(string){
	var splitStr = string.split("");
		var newStr = splitStr.reverse().join('');
			console.log(newStr);
	}

//Round 6 

var longestWord = function(strArray){
	var word = 0;
	var longest = " ";
		for(var i =0; i < strArray.length; i++){
			if(strArray[i].length > word){
				word = strArray[i].length;
				longest = strArray[i]
			}
		}
		console.log(longest)
	}


//Round 7


var repMaster = function(input,wordReverse){


}















