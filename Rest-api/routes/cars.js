const router = require("express").Router();
const { auth } = require("../utils");
const carController = require("../controllers/carController");

router.get('/', carController.getCars);
router.post('/', auth(), carController.createCar);

router.get("/:carId", carController.getCar);

module.exports = router;
