let re = "\x1B[31m";
let blu = "\x1B[34m";
let bol = "\x1B[1m";
let rese = "\x1B[0m";
let gree = "\x1B[32m";
let yello = '\x1b[33m';
function red() {
	return re;
}
function blue() {
	return blu;
}
function bold() {
	return bol;
}
function reset() {
	return rese;
}
function green() {
	return gree;
}
function yellow() {
	return yello;
}
module.exports = {
	red : red,
	blue : blue,
	bold : bold,
	reset : reset,
	green : green,
	yellow : yellow
}