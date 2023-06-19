import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const read = async () => {
    const filePath = path.join(__dirname, 'files/fileToRead.txt');

    fs.createReadStream(filePath, 'utf-8').on('data', (chunk) => stdout.write(chunk));
};

await read();
