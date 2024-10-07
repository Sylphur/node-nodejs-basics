import fsp from 'fs/promises';
import fs from 'fs';
import { constants } from "fs";
import path from 'path';

const copy = async () => {
    const pathToDir = path.join(path.resolve(), 'src', 'fs', 'files');
    const pathToNewDir = path.join(path.resolve(), 'src', 'fs', 'files_copy');
    try {
        const files = await fsp.readdir(pathToDir);

        if (!fs.existsSync(pathToNewDir)) await fsp.mkdir(pathToNewDir);
        else throw new Error('Folder is already exists')

        for (const file of files) {
            fsp.copyFile(path.join(pathToDir, file), path.join(pathToNewDir, file), constants.COPYFILE_EXCL)
        }
        console.log('Files folder is successfully copied');
        
    } catch (error) {
        console.error('FS operation failed');
    }
};

await copy();
