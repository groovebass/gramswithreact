const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const restaurantSchema = new Schema({
  restaurantName: {
    type: String, 
    required: true,
    unique: true
  },
  restaurantAddress: {
    type: String,
    required: true
  },
  restaurantImg: {
    type: String,
    required: true
  },
  restaurantDescription: {
    type: String, 
    required: true
  },
  dishes: [{
    type: Schema.Types.ObjectId,
    ref: "Dish"
  }],
  tables: [{
    type: Schema.Types.ObjectId,
    ref: "Table"
  }]
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = Restaurant;
