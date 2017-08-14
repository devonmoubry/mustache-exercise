const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/todo/', function (req, res) {
  let todoList = [
    {'text': 'Learn Node basics', 'complete': true},
    {'text': 'Learn Express basics', 'complete': true},
    {'text': 'Learn Mustache', 'complete': true},
    {'text': 'Learn HTML forms with Express', 'complete': false},
    {'text': 'Learn about authentication', 'complete': false},
    {'text': 'Learn how to connect to PostgreSQL', 'complete': false},
    {'text': 'Learn how to create databases', 'complete': false},
    {'text': 'Learn SQL', 'complete': false},
    {'text': 'Learn how to connect to PostgreSQL from Node', 'complete': false},
    {'text': 'Learn how to use Sequelize', 'complete': false}
  ];
  res.render('todo', {todoList: todoList});
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
