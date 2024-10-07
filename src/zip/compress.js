import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import stream from "stream/promises";

const compress = async () => {
    const pathToFile = path.join(path.resolve(), 'src', 'zip', 'files', 'fileToCompress.txt');
    const pathToTargetFile = path.join(path.resolve(), 'src', 'zip', 'files', 'archive.gz');

    try {
        const readStream = fs.createReadStream(pathToFile, {encoding: 'utf-8'});
        const writeStream = fs.createWriteStream(pathToTargetFile);
        const gZip = zlib.createGzip();
        // readStream.pipe(gZip).pipe(writeStream);
        await stream.pipeline(readStream, gZip, writeStream);

    } catch (error) {
        console.error('Zip operation failed');
        console.error(error);  
    }
};

await compress();