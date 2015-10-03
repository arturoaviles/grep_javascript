// Start of the Program
console.log('The program started');

// Initial variables
var textArea = prompt('Paste the text in which you want to search for a word: ');
var searchWord = prompt('Write the word you want to search: ');

// Divide the textarea by lines
var lines = textArea.split('\n');

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
for(var i = 0; i < lines.length; i++){
	var words = lines[i].split(' ');
	for(var j = 0; j <= words.length; j++) {
		if(searchWord==words[j]){
			//If word was found print: index +1 (Remember array starts on 0) and  print line.
			var index = lines.indexOf(lines[i]) + 1;
			document.write("<h2>Line "+index+": "+lines[i]);
		}
	}
}

// End of program
console.log('The program ended correctly');