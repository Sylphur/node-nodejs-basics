import fsp from 'fs/promises';
import fs from 'fs';
import path from 'path';

const create = async () => {
    const pathToFile = path.join(path.resolve(), 'src', 'fs', 'files', 'fresh.txt');
    if (!fs.existsSync(pathToFile)) { //according to documentation async analogue (fs.access()) is not allowed before calling fs.open(), fs.readFile() or fs.writeFile()
        fsp.writeFile(pathToFile, "I am fresh and young", (err) => {
            if (err) throw err;
            console.log('File created!');
        })
    }
    else throw new Error('FS operation failed')
};

await create();