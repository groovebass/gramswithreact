const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  tableNum: {
      type: String, 
      required: true
  },
  section: {
      type: String, 
      required: false
  },
  occupied: {
      type: Boolean,
      default: false
  }
});

const Table = mongoose.model("Table", tableSchema);

module.exports = Table;