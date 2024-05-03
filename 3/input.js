const fs = require('fs');
const chalk = require('chalk');

console.log(process.pid);

const msg = 'Provide a name of type exit to close:';

console.log(msg);

// pause and wait for user input
process.stdin.on('data', userInput => {
    let input = userInput.toString();

    if (input.toLowerCase().trim() === 'exit') {
        process.exit();
    } else {
        // Remove the enter key \n \r \r\n
        input = input.replace(/(\r\n|\r|\n)/gm, '');

        if (input !== '') {
            let names = [];

            if (fs.existsSync('data/names.json'))
                names = JSON.parse(fs.readFileSync('data/names.json'));

            if (input.toLowerCase() === 'list') {
                if (names.length === 0) {
                    console.log('No names yet');
                }

                for (const person of names) {
                    console.log(`Id: ${person.id} Name: ${person.name}`);
                }
            } else if (input.toLowerCase() === 'delete') {
                if (fs.existsSync('data/names.json')) {
                    fs.unlinkSync('data/names.json');
                    console.log('The users.json file has been deleted');
                }
            } else {
                let person = {
                    id: names.length + 1,
                    name: input
                }

                names.push(person);

                fs.writeFileSync('data/names.json', JSON.stringify(names));
            }
        } else {
            console.log(chalk.yellow('Name is required'));
        }
    }
});

// Handle exit event
process.on('exit', () => {
    console.log(`Exiting process ${process.pid}`);
    console.log('Goodbye');
});