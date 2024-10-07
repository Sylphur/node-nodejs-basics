import fs from 'fs';
import path from 'path';

const write = async () => {
    const pathToFile = path.join(path.resolve(), 'src', 'streams', 'files', 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(pathToFile);
    process.stdin.pipe(writeStream);
};

await write();