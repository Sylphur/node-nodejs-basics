import fsp from 'fs/promises';
import fs from 'fs';
import path from 'path';

const rename = async () => {
    const pathToFile = path.join(path.resolve(), 'src', 'fs', 'files', 'wrongFileName.txt');
    const pathToDestinationFile = path.join(path.resolve(), 'src', 'fs', 'files', 'properFilename.md');
    try {
        if (!fs.existsSync(pathToFile) || fs.existsSync(pathToDestinationFile)) throw new Error('File is not exist or already being renamed');
        fsp.rename(pathToFile, pathToDestinationFile);
        console.log('wrongFileName.txt has been renamed');
        
    } catch (error) {
        console.error('FS operation failed');
    }
};

await rename();