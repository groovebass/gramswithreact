const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const dishRoutes = require("./dishes");
const tableRoutes = require("./tables");
const orderRoutes = require("./orders");
const userRoutes = require("./users");

// Book routes
router.use("/restaurants", restaurantRoutes);
router.use("/dishes", dishRoutes);
router.use("/tables", tableRoutes);
router.use("/orders", orderRoutes);
router.use("/users", userRoutes);

module.exports = router;
