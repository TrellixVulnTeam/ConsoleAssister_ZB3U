# ConsoleAssister

ConsoleAssister is a nodejs version of the [consolehelp](https://github.com/darkdarcool/consolehelp)! This is meant for the console, but can be used for websites too!(coming soon!)

## Requisites

To install this, please use **`npm`**! If you don't have npm, please install it! Here is how you get it!

**`NOTE:`** You have to have [nodejs](https://nodejs.org) installed on your system to use npm.
``` bash
$ npm install npm@latest -g
```
## Installation 
Once you have npm installed, you can then install ConsoleAssister! Here is how you install it:

``` bash
$ npm install consoleassister@latest
```

Then, in your **nodejs** code, you can insert:

``` nodejs
const test = require('consoleassister');
```

You can then use the module for your own js project!

# Examples

Here is how you do a simple typing animation with consoleassister!

``` js
const test = require('consoleassister');
test.sp("Hello World!")
```

You can also use some colors too!
``` js
test.sp(test.red() + "This text will be red!")
```

Also, when they typing animation ends, it resets the color, try it out!

``` js
test.sp(test.red() + "This will be red")
test.sp("This will be normal!")
```

You can also find the length of a string in a simplified way! Here's how you do it:

``` js
mystring = "Hello!"
console.log(test.length(mystring))
```

It returns the value of 6 because there are 6 characters in the string! You can do this for lists too!

``` js
mylist = ['H', 'i', '!']
console.log(test.length(mylist))
```

It returns 3, because there are 3 elements in the list!

