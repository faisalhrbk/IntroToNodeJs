console.log('hello world!');
const fs = require('fs');
fs.writeFile('output.txt', 'here is the first file writing', (err) => {
    if (err) console.log('error occured');
    else console.log('file written successfully');
    
    
})