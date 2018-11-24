const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: (req, res) => {
    if (req.query) {
      db.Restaurant
        .find(req.query)
        .populate("dishes")
        .populate("tables")
        .then(dbRestaurant => res.json(dbRestaurant))
        .catch(err => res.status(422).json(err));
    } else {
      db.Restaurant
        .find(req.query)
        .populate("dishes")
        .populate("tables")
        .then(dbRestaurant => res.json(dbRestaurant))
        .catch(err => res.status(422).json(err));
    }
  },
  findById: (req, res) => {
    db.Restaurant
      .findById(req.params.id)
      .populate("dishes")
      .populate("tables")
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    db.Restaurant
      .create(req.body)
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Restaurant
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));
  },
  addOrder: (req, res) => {
    db.Restaurant
      .findByIdAndUpdate(req.params.id, {$push: {orders: req.body.orders}})
      .then(dbRestaurant => res.json({message: "Order status updated"}))
  },
  removeOrder: (req, res) => {
    db.Restaurant
      .findByIdAndUpdate(req.params.id, {$pull: {orders: req.body.orders}})
      .then(dbRestaurant => res.json({message: "Order status updated"}))
  },
  addDish: (req, res) => {
    db.Restaurant
      .findByIdAndUpdate(req.params.id, {$push: {dishes: req.body.dishes}})
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err)); 
  },
  removeDish: (req, res) => {
    db.Restaurant
      .findByIdAndUpdate(req.params.id, {$pull: {dishes: req.body.dishes}})
      .then(dbRestaurant => res.json(dbRestaurant))
      .catch(err => res.status(422).json(err));

  },
  removeRestaurant: (req, res) => {
    db.Restaurant
      .findByIdAndRemove(req.params.id)
      .then(() => res.json({message: "Restaurant deleted"}))
      .catch(err => res.status(422).json(err));
  }
};
