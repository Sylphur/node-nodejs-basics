import fsp from 'fs/promises';
import path from 'path';

const read = async () => {
    const pathToFile = path.join(path.resolve(), 'src', 'fs', 'files', 'fileToRead.txt');
    try {
        const data = await fsp.readFile(pathToFile, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error('FS operation failed');
    }
};

await read();