

var ClozeCard = function(text, cloze){

	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
	this.fullText = text;

	var throwErr = function(){
		if (cloze === "" || text === "") {
			console.log("There was an error!");
		}
	}
}



var firstQ = new ClozeCard("George Washington was the first President of the USA", "George Washington");

console.log(firstQ.partial);

module.exports = ClozeCard;