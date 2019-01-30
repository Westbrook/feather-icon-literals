const fs = require('fs');
const glob = require('glob');
const camelcase = require('camelcase');
const uppercamelcase = require('uppercamelcase');
const path = require('path');
const cheerio = require('cheerio');
const prettier = require('prettier');

const rootDir = path.join(__dirname, '..');

glob(`${rootDir}/node_modules/feather-icons/dist/icons/**.svg`, (err, icons) => {
  fs.writeFileSync(path.join(rootDir, 'lib', 'icons.js'), '', 'utf-8');

  icons.forEach(i => {
    const svg = fs.readFileSync(i, 'utf-8');
    const id = path.basename(i, '.svg');
    const ComponentName = (id === 'github') ? 'GitHub' : uppercamelcase(id);
    const $ = cheerio.load(svg, {
      xmlMode: true,
    });
    const fileName = path.basename(i).replace('.svg', '.js');
    const location = path.join(rootDir, 'lib/icons', fileName);

    $('*').each((index, el) => {
      Object.keys(el.attribs).forEach(x => {
        if (x === 'class') {
          $(el).removeAttr(x);
        }
        if (x === 'stroke') {
          $(el).attr(x, 'currentColor');
        }
      });
    });

    const iconLiteral = `
      import {tag as html} from '../custom-tag.js';

      export {setCustomTemplateLiteralTag} from '../custom-tag.js';
      export const ${ComponentName} = () => html\`${$('svg').toString()}\`;
    `;

    const icon = prettier.format(iconLiteral, {
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: 'all',
      bracketSpacing: true,
      jsxBracketSameLine: false,
      arrowParens: 'avoid',
      parser: 'typescript',
    });

    fs.writeFileSync(location, icon, 'utf-8');

    const exportString = `export ${ComponentName} from './icons/${id}';\r\n`;
    fs.appendFileSync(
      path.join(rootDir, 'lib', 'icons.js'),
      exportString,
      'utf-8'
    );
  });

  const exportString = `\r\nexport { setCustomTemplateLiteralTag } from './custom-tag.js';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, 'lib', 'icons.js'),
    exportString,
    'utf-8'
  );
});
