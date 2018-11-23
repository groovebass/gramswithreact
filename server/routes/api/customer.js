const router = require("express").Router();
const customerController = require("../../controllers/customerController");

// "/api/customers/"
router
    .route("/")
    .get(customerController.findAll)
    .post(customerController.createCustomer);

// "/api/customers/:id"
router 
    .route("/:id")
    .delete(customerController.removeCustomer);
// "/api/customers/update-customer-add/:id"
router 
    .route("/update-customer-add/:id")
    .put(customerController.updateCustomer);
// "/api/customers/update-customer-remove/:id"
router 
    .route("/update-customer-remove/:id")
    .put(customerController.removeFromCustomer);

module.exports = router;
