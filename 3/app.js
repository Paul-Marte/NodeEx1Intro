const chalk = require('chalk');

console.log(chalk.red('Hello there I am red!'));
console.log(chalk.blue('Hello I am blue'));
console.log(chalk.green.bold.bgYellowBright('I am bold and green'));
console.log(chalk.bgBlueBright.italic.rgb(155,67,78).bold.underline('Custom RGB'));