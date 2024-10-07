import fsp from 'fs/promises';
import path from 'path';

const remove = async () => {
    const pathToFile = path.join(path.resolve(), 'src', 'fs', 'files', 'fileToRemove.txt');
    try {
        await fsp.rm(pathToFile);
        console.log('fileToRemove.txt has been deleted');
        
    } catch (error) {
        console.error('FS operation failed');
    }
};

await remove();