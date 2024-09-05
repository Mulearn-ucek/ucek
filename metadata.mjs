import fs from 'fs';
import path from 'path';
import process from 'node:process';

// This file is used to store the last modified date of all files in /content folder

const contentFolderPath = path.join(process.cwd(), 'contents');

// Function to recursively get the last modified date of a file or directory
function getLastModifiedDate(filePath) {
    const stats = fs.statSync(filePath);
    return stats.mtime;
}

// Function to recursively get the last modified dates of all files in a directory
function getLastModifiedDates(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    const fileDates = {};

    files.forEach((file) => {
        const filePath = path.join(directoryPath, file);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            fileDates[file] = getLastModifiedDate(filePath);
        } else if (stats.isDirectory()) {
            fileDates[file] = getLastModifiedDates(filePath);
        }
    });

    return fileDates;
}

// Get the last modified dates of all files in the content folder
const metadata = getLastModifiedDates(contentFolderPath);

// Write the metadata as JSON to the metadata.js file
fs.writeFileSync('./lib/metadata.json', JSON.stringify(metadata, null, 2));

console.log('=> Metadata file created successfully.');