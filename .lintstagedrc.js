const path = require('path')
 
const buildEslintCommand = (filenames) =>
  `next lint --no-cache --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`
 
module.exports = {
  '*.(ts|tsx)': () => 'bun tsc --noEmit',
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.(md|json)': filenames => `bun prettier --write ${filenames.join(' ')}`
}