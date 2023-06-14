const express = require('express');
const app = express();
const indexRouter = require('./controllers/index')


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', indexRouter)


app.listen(3000);