const route = require('express').Router()
const passport = require('passport')

route.get('/', (req, res) => {
  res.send(200)
})

route.post('/',
  passport.authenticate(
      'local',
     
    ),
  (req, res) => {
    res.send(req.user)
  }

)


module.exports = route
