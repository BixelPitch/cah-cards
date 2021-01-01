const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const outputDir = path.join(__dirname, '../dist');
const inputDir = path.join(__dirname, 'cards');

const version = '1.2.0';

fs.rmdirSync(outputDir, { recursive: true });
fs.mkdirSync(outputDir);

const indexJsonContent = {
    version,
    stats: {
        languages: [],
        white_cards_translated: 0,
        black_cards_translated: 0,
        white_cards_original: 0,
        black_cards_original: 0,
        white_cards_official: 0,
        black_cards_official: 0,
        packs_translated: 0,
        packs_original: 0,
        packs_official: 0,
    },
    packs: {
        yml: [],
        json: [],
    },
};

const packs = [];

const inputSubDirs = fs.readdirSync(inputDir);
inputSubDirs.forEach((inputSubDir) => {
    const yamlFiles = fs.readdirSync(path.join(inputDir, inputSubDir));
    yamlFiles.forEach((yamlFile) => {
        const filePath = path.join(inputDir, inputSubDir, yamlFile);
        const raw = fs.readFileSync(filePath);
        const pack = yaml.parse(raw.toString());
        const filename = yamlFile.split('.')[0];
        packs.push(pack);

        // generate statistics
        if (indexJsonContent.stats.languages.indexOf(pack.language) === -1) {
            indexJsonContent.stats.languages.push(pack.language);
            fs.mkdirSync(path.join(outputDir, pack.language));
        }

        if (pack.type === 'original') {
            indexJsonContent.stats.white_cards_original += pack.white_cards.length;
            indexJsonContent.stats.black_cards_original += pack.black_cards.length;
            indexJsonContent.stats.packs_original += 1;
        } else if (pack.type === 'official') {
            indexJsonContent.stats.white_cards_official += pack.white_cards.length;
            indexJsonContent.stats.black_cards_official += pack.black_cards.length;
            indexJsonContent.stats.packs_official += 1;
        } else {
            indexJsonContent.stats.white_cards_translated += pack.white_cards.length;
            indexJsonContent.stats.black_cards_translated += pack.black_cards.length;
            indexJsonContent.stats.packs_translated += 1;
        }

        // create yaml
        fs.writeFileSync(path.join(outputDir, pack.language, yamlFile), raw);
        indexJsonContent.packs.yml.push(`/${pack.language}/${yamlFile}`);

        // create json
        fs.writeFileSync(path.join(outputDir, pack.language, `${filename}.json`),
            JSON.stringify(pack, null, 2));
        indexJsonContent.packs.json.push(`/${pack.language}/${filename}.json`);
    });
});

// create index json
fs.writeFileSync(path.join(outputDir, 'index.json'), JSON.stringify(indexJsonContent, null, 2));
fs.writeFileSync(path.join(outputDir, 'all.json'), JSON.stringify(packs, null, 2));
