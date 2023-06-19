import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { stdin } from 'process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const write = async () => {
    const filePath = path.join(__dirname, 'files/fileToWrite.txt');

    const stream = fs.createWriteStream(filePath);
    stdin.on('data', (data) => stream.write(data.toString()));
};

await write();
