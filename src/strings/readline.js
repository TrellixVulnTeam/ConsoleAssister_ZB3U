const prompt = require('prompt-sync')();
//const name = prompt('What is your name?');
const readline = (text) => {
	uh = prompt(text);
	return uh;
}
module.exports = {
	readline: readline
}