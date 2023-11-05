const path = require('path');

const buildTscCommand = filenames =>
  `tsc --noEmit ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' ')}`;

const prettierCommand = filenames => ` bun prettier -w ${filenames.join(' ')}`;

const buildEslintCommand = filenames =>
  `next lint --no-cache --fix --file ${filenames
    .map(f => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.(ts|tsx)': [buildTscCommand],
  '*.{js,jsx,ts,tsx}': [prettierCommand, buildEslintCommand],
  '*.(md|json)': filenames => `bun prettier --write ${filenames.join(' ')}`
};
