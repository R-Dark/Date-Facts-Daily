const chalk = require('chalk')

function blue(text) {
  return (chalk.blue(text));
}

function magenta(text) {
  return (chalk.magenta(text));
}

function cyan(text) {
  return (chalk.cyan(text));
}

function green(text) {
  return (chalk.green(text));
}

function red(text) {
  return (chalk.red(text));
}

module.exports = {
  blue: blue,
  magenta: magenta,
  cyan: cyan,
  green: green,
  red: red,
}
