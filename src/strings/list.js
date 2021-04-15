function length(stuff) {
	return stuff.length
	
}
function makestring(stuff) {
	if (Array.isArray(stuff) == true) {
		mystuff = stuff.join("")
		return mystuff
	}
	else {
		throw new Error(`${stuff} is not a list/array!`)
	}
}
function makelist(stuff) {
	if (typeof stuff == "string") {
		return stuff.split("")
	}
	else {
		throw new Error(`${stuff} is not a string!`)
	}
}
const jsonparse = (stuff) => {
	mystuff = JSON.parse(stuff);
}
module.exports = {
	length : length,
	makestring : makestring,
	makelist : makelist,
	jsonparse : jsonparse
}
