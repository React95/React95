import fs from 'fs';

const content = fs.readFileSync('dist/icons.css', 'utf8');
fs.writeFileSync('dist/icons.css', content.split('src/').join(''));
