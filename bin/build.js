const fs = require('fs');
const glob = require('glob');
const path = require('path');
const cheerio = require('cheerio');
const prettier = require('prettier');
const Case = require('case');

const rootDir = path.join(__dirname, '..');

glob(`${rootDir}/node_modules/feather-icons/dist/icons/**.svg`, (err, icons) => {
  fs.writeFileSync(path.join(rootDir, 'lib', 'icons.js'), '', 'utf-8');

  icons.forEach(i => {
    const svg = fs.readFileSync(i, 'utf-8');
    const id = path.basename(i, '.svg');
    const ComponentName = (id === 'github') ? 'GitHub' : Case.pascal(id);
    const $ = cheerio.load(svg, {
      xmlMode: true,
    });
    const title = Case.capital(id);
    const fileName = path.basename(i).replace('.svg', '.js');
    const location = path.join(rootDir, 'lib/icons', fileName);

    $('*').each((index, el) => {
      if (el.name === 'svg') {
        $(el).prepend('<desc />');
        $(el).prepend('<title id="${`title-' + id + '-${count}`}">${title}</title>');
        $(el).attr('aria-hidden', '...');
        $(el).attr('role', 'img');
        $(el).attr('aria-labelledby', '${`title-' + id + '-${count}`}');
        $(el).attr('aria-describedby', '${`title-' + id + '-${count}`}');
      }
      Object.keys(el.attribs).forEach(x => {
        if (x === 'class') {
          $(el).removeAttr(x);
        }
        if (x === 'stroke') {
          $(el).attr(x, 'currentColor');
        }
        if (el.name === 'svg') {
          if (x === 'width' || x === 'height') {
            $(el).attr(x, '${' + x + '}');
          }
        }
      });
    });

    const iconLiteral = `
      import {tag as html} from '../custom-tag.js';
      let iconCount = 0;

      export {setCustomTemplateLiteralTag} from '../custom-tag.js';
      export const ${ComponentName} = ({
        width = 24,
        height = 24,
        hidden = false,
        title = '${title}',
        desc,
      } = {},) => {
        const count = iconCount++;
        return html\`${$('svg')
          .toString()
          .replace('aria-hidden="..."', 'aria-hidden="${hidden ? \'true\' : \'false\'}"')
          .replace(
            '<desc/>',
            '${desc ? html`<desc id="${`desc-' + id + '-${count}`}">${desc}</desc>` : html``}'
          )
        }\`;
      }
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

    const exportString = `export {${ComponentName}} from './icons/${id}.js';\r\n`;
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
