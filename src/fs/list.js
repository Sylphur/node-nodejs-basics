import fsp from 'fs/promises';
import path from 'path';

const list = async () => {
    const pathToDir = path.join(path.resolve(), 'src', 'fs', 'files');
    try {
        const files = await fsp.readdir(pathToDir);
        for (const file of files) {
            console.log(file);
        }
    } catch (error) {
        console.error('FS operation failed');
    }
};

await list();