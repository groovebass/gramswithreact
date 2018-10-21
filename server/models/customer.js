const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    customerName: {
        type: String, 
        required: true
    },
    customerPhone: String,
    required: false, 
    validate: {
        validator: value => /\d{3}-\d{3}-\d{4}/.test(value),
        message: props => `${props.value} is not a phone number!`
    },
    customerEmail: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
            message: props => `${props.value} is not a valid email!`
        }
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }],
    table: {
        type: Schema.Types.ObjectId, 
        ref: "Table"
    }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;