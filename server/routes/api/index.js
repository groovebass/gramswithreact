const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const dishRoutes = require("./dishes");

// Book routes
router.use("/restaurants", bookRoutes);
router.use("/dishes", dishRoutes);

module.exports = router;
