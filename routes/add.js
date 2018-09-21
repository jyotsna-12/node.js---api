const route = require('express').Router()
const {Order} = require('../db/models')

route.get('/', (req, res) => {
  Order.findAll()
    .then(Order => res.json(Order))
    .catch((err) => res.send(err.message))
})

route.post('/', (req, res) => {
  Order
//order creation 
  .create({
    name_of_item: req.body.name_of_item,
    price: req.body.price,
    quantity: req.body.quantity,
    pos: req.body.pos
  })
    .then((createdOrder) => res.json(createdOrder))
    .catch((err) => res.send(err.message))
})

module.exports = route