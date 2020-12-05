import * as fs from 'fs'
import * as readLine from 'readline'

let array = [];

const lineReader = readLine.createInterface({
    // update with some file name when new file input
    input: fs.createReadStream('/some/where/some-file.txt')
});

lineReader.on('line', function (line) {
    array.push(line)
    console.log('Here be the initial input: ', line);
});


lineReader.on('close', function () {
    console.log('Here be the array: ', array);
});