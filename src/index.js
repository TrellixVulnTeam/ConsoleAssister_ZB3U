me = require('./sp.js')
mee = require('./color.js')
meee = require('./math.js')
meeee = require('./strings/list.js')
game = require('./strings/readline.js')
module.exports = {
  sp: me.sp,
  red : mee.red,
  blue : mee.blue,
  bold : mee.bold,
  reset : mee.reset,
  green : mee.green,
  yellow : mee.yellow,
  add : meee.add,
  subtract : meee.subtract,
  multiply : meee.multiply,
  divide : meee.divide,
  length : meeee.length,
  makestring : meeee.makestring,
  makelist : meeee.makelist,
	readline : game.readline
}