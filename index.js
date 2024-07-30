import{greet} from './greet.js';
console.log(greet('Masego'));

import chalk from 'chalk';

import cowsay from 'cowsay';

import figlet from 'figlet';

console.log(chalk.bgBlue.whiteBright(cowsay.say({
    text:greet('Masego')
})));

figlet('Hello,Masego!', function (err,data) {
    if (err){
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

console.log(data)
});

const styledMessage = chalk.bgRed.whiteBright(greet("Masego"));
console.log(styledMessage);

