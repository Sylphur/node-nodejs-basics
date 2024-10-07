import fs from 'fs';
import path from 'path';

const read = async () => {
    const pathToFile = path.join(path.resolve(), 'src', 'streams', 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(pathToFile, {encoding: 'utf-8'})
    readStream.on('data', (chunk) => {
        console.log(chunk);
    })
    readStream.pipe(process.stdout);
};

await read();