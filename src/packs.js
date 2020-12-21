const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const inputDir = path.join(__dirname, 'cards');
const inputSubDirs = fs.readdirSync(inputDir);
const packs = [];

inputSubDirs.forEach((inputSubDir) => {
    const yamlFiles = fs.readdirSync(path.join(inputDir, inputSubDir));
    yamlFiles.forEach((yamlFile) => {
        const filePath = path.join(inputDir, inputSubDir, yamlFile);
        const raw = fs.readFileSync(filePath);
        packs.push(yaml.parse(raw.toString()));
    });
});

module.exports = packs;
