const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express();
const pages = require('./views/main');
const { db, Page, User } = require('./models');

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


app.use('/wiki', wikiRouter);

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

  //middleware

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false })); //body parser






app.get('/', (req, res, next) => {
  console.log(chalk.blue('Hello World'));
  res.send(pages());
});

// app.get('/testing', (req, res, next) => {
//   console.log(chalk.blue('other hit'));
//   res.send('This is from the app.js file');
// });


const PORT = 1337;

const connect = async () => {
  await db.sync( {force: true} ); //sync Page and User db's

  app.listen(PORT, () => {
    console.log(chalk.blue(`http://localhost:${PORT}`));
  });
}

connect();
module.exports = app
