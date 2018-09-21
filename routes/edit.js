const route = require('express').Router()
const {Order} = require('../db/models')

route.use('/', (req, res, next) => {
  if (!req.user) {
    return res.json([])
  } else {
    next()
  }
})


route.get('/', (req, res) => {

  Order.findAll({
    where: {email: req.User.email}  //mapping by email
  }).then((cartItems) => {
    res.json(cartItems)
  })
})

route.post('/', (req, res) => {
  let usercart = req.body.usercart

  usercart = usercart.map(o => {
    o.email = req.User.email
    return o
  })
//update items
  Promise.all(usercart.map(o => Order.upsert(o, {fields:['name_of_item']['price']['quantity']['pos']})))
    .then(resultArr => {
      res.json({status: 'successful'})
    })
    .catch((err) => {
      res.json({error: err})
    })

})

module.exports = route