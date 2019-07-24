const chalk = require('chalk-animation');
// animate-string.js
const validMethods = [ `glitch`, `karaoke`, `neon`, `pulse`, `radar`, `rainbow` ];
console.log(process.argv)
const scriptArg = process.argv[2];


console.log(scriptArg);
const method = validMethods.includes(scriptArg) ? scriptArg : 'rainbow';
console.log('method', method)


function animateString(string) {
  // const animation = chalk.rainbow(string)


  // setTimeout(() => animation.stop(), 2000)
  const animation = chalk[method](string)
  animation.start()

}

module.exports = animateString;