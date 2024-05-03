const fs = require('fs'); // Core Module
const path = require('path'); // Core Module

const currentDir = `Current directory is ${__dirname}`;
console.log(currentDir);

const fileAndDir = `File name and full path ${__filename}`;
console.log(fileAndDir);

const fileNameOnly = `File name only is ${path.basename(__filename)}`;
console.log(fileNameOnly);

// ASYNC
fs.readdir('myfiles', (err, files) => {
    // error handling
    if (!!err) {        
        console.log('Error reading directory');
        console.log(err);
        return;
    }

    for(const file of files){
        console.log(file); //logs out the file names in the directory
    }
});

console.log('Folder structure reading done');


// SYNC must use try catch
try {
    const files = fs.readdirSync('Z:\\NodeJs');

    for (const file of files) {
        console.log(file);
    }

    console.log('Folder structure reading SYNC done');
} catch (error) {
    console.log('Sync folder read error');
}