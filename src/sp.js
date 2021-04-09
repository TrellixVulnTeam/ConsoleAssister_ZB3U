l = require('./color.js')
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};
function sp(str, speed){
	if (speed == undefined || null) {
		speed = 60
	}
	if (isNaN(speed)) {
		throw new Error(`${speed} is not a number!`)
	}
	for(let i = 0; i < str.length; i++) {
		try {
			sleep(speed);
		}
		catch {
			throw new Error(`Error when making ${speed} the speed for the typing animation!`)
		}
  	process.stdout.write(str[i]);
	};
	console.log(l.reset())
};

function die(reason) {
    throw new Error(reason);
};

let red = "\x1B[31m";
let blue = "\x1B[34m";
let bold = "\x1B[1m";
let reset = "\x1B[0m";
let green = "\x1B[32m";
let yellow = '\x1b[33m';

module.exports = {
  sleep: sleep,
  sp: sp,
  die: die
}