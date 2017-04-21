const chalk = require('chalk');
var _ = require('lodash');

console.log(chalk.cyan('\nEXERCISE 1 LOADED\n'));

const zip = (arrays) => {
    const length = Math.min(arrays.map(arr => arr.length));
    return Array.from({ length }, (value, index) => arrays.map((array => array[index])))
};


module.exports = {
  zip: zip,
  run: zip
}
