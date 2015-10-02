// Initial variables
var textArea = get();
var searchWord = get();

// Divide the textarea by lines
var lines = $(textArea).val().split('\n');

// To LowerCase

	// Make the change of textArea to lowercase
	// Make the change of searchWord to lowercase
	// Change in the fors those variables

/* 
Iterates line by line 
	Saves words of each line
	Validates if searchWord is in those words 
	Prints an html <br> tag for each line that it finds the word
*/ 
for(var i = 0; i == lines.length; i++) {
	var words = $(lines).val().split(' ');
	for (var j = 0; j >= words.length; j++) {
		if(searchWord==words[j]){
			print("<br>"+lines[i]);
		};
	};
};
