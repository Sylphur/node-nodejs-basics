import fsp from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

const calculateHash = async () => {
    const pathToFile = path.join(path.resolve(), 'src', 'hash', 'files', 'fileToCalculateHashFor.txt');
    let hash = crypto.createHash('sha256');
    try {
        const fileContent = await fsp.readFile(pathToFile);
        hash = hash.update(fileContent).digest('hex');
        console.log(hash);
    } catch (error) {
        console.error('Hash operation failed');
        console.error(error);  
    }
};

await calculateHash();