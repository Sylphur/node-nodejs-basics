import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import stream from "stream/promises";

const decompress = async () => {
    const pathToFile = path.join(path.resolve(), 'src', 'zip', 'files', 'archive.gz');
    const pathToTargetFile = path.join(path.resolve(), 'src', 'zip', 'files', 'fileToCompress.txt');

    try {
        if (!fs.existsSync(pathToFile)) throw new Error('Archive to decompress is not exist');
        const readStream = fs.createReadStream(pathToFile);
        const writeStream = fs.createWriteStream(pathToTargetFile);
        const gUnZip = zlib.createGunzip();
        await stream.pipeline(readStream, gUnZip, writeStream);

    } catch (error) {
        console.error('Zip operation failed');
        console.error(error);  
    }
};

await decompress();