import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import stream from "stream/promises";

const compress = async () => {
    const pathToFile = path.join(path.resolve(), 'src', 'zip', 'files', 'fileToCompress.txt');
    const pathToTargetFile = path.join(path.resolve(), 'src', 'zip', 'files', 'archive.gz');

    try {
        if (!fs.existsSync(pathToFile)) throw new Error('File to compress is not exist');
        const readStream = fs.createReadStream(pathToFile, {encoding: 'utf-8'});
        const writeStream = fs.createWriteStream(pathToTargetFile);
        const gZip = zlib.createGzip();
        await stream.pipeline(readStream, gZip, writeStream);

    } catch (error) {
        console.error('Zip operation failed');
        console.error(error);  
    }
};

await compress();