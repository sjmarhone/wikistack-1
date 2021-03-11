const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express();
const pages = require('./views/main');
const { db, Page, User } = require('./models');

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  console.log(chalk.blue('Hello World'));
  res.send(pages());
});

const PORT = 1337;

const connect = async () => {
  await db.sync( {force: true} ); //sync Page and User db's

  app.listen(PORT, () => {
    console.log(chalk.blue(`http://localhost:${PORT}`));
  });
}

connect();
