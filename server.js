const express = require('express');
const session = require('express-session')
const passport = require('./mypassport')


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
  secret: 'something that should not be shared',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())


// Routes

app.use('/signin', require('./routes/signin'))
app.use('/signup', require('./routes/signup'))
app.use('/myaccount', require('./routes/myaccount'))
app.use('/add', require('./routes/add'))
app.use('/del', require('./routes/del'))
app.use('/edit', require('./routes/edit'))

var port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});