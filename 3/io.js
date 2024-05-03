const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const fileName = './data/myTextFile.txt';

// Check existence of a folder
if (!fs.existsSync('data')) {
    fs.mkdirSync('data');
} else {
    console.log(chalk.yellow('The data folder already exists'));
}

/*

// write
fs.writeFile(fileName, `Hello from GEX Class of 2025 ${new Date()}`, err => {
    if (!!err) {
        console.log(chalk.red('Error occured writing file'));
        console.log(err);
    } else {
        console.log(chalk.green('File has been created'));
    }
});

fs.appendFile(fileName, `\nSome additional data appended at ${new Date()}`, err => {
    if (!!err) {
        console.log(chalk.red('Error occured apending to the file'));
        console.log(err);
    } else {
        console.log(chalk.green('File has been created'));
    }
});

// Read file
fs.readFile(fileName, 'utf-8', (err, data) => {
    if (!!err)
        console.log(chalk.red('Error occured reading file'));
    else {
        // Let's print file name only
        console.log(`Loaded file: ${path.basename(fileName)}`);
        console.log('____Display Content____');
        console.log(chalk.blue(data));
    }
});

try {
    const mkFileContent = fs.readFileSync('data/mk.txt');

    console.log(chalk.yellow(mkFileContent));
} catch (error) {
    console.log('Unable to load file');
}

console.log('MK Render attempt complete');

*/

let users = [
    {
        id: 1,
        firsName: 'Chris',
        lastName: 'Cusack',
        courses: [
            {
                id: 1,
                name: 'AdvJS'
            },
            {
                id: 2,
                name: 'Data Structures'
            }
        ]
    },
    {
        id: 2,
        firsName: 'Dave',
        lastName: 'Burchill'
    }
]

console.log(users);

const userJSONFile = 'data/users.json';

// Write users array to json file
// Convert JS object to json is called serialization
fs.writeFile(userJSONFile, JSON.stringify(users), err => {
    if (!!err) {
        console.log(chalk.red(err));
    }
});

fs.readFile(userJSONFile, 'utf-8', (err, data) => {
    if (!!err)
        console.log(chalk.red(err));
    else {
        console.log(data);

        users = JSON.parse(data); // deserialization

        console.log(users);

        users.push({
            id: 3,
            firsName: 'Stephen',
            lastName: 'Carter',
            designation: 'WMAD CI'
        });

        fs.writeFile(userJSONFile, JSON.stringify(users), err => {
            if (!!err) 
                console.log(chalk.red(err));
            else {
                fs.copyFileSync(userJSONFile, 'data/users_backup.json');
            }
        });
    }
});