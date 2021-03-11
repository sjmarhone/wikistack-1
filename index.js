const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express();
const pages = require('./views/main');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  console.log(chalk.blue('Hello World'));
  res.send(pages());
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(chalk.blue(`http://localhost:${PORT}`));
});
