const router = require("express").Router();
const { auth } = require("../utils");
const carController = require("../controllers/carController");

router.get('/', carController.getCars);
router.post('/', auth(), carController.createCar);

router.get("/:carId", carController.getCar);
router.put("/:carId", auth(), carController.editCar);
router.put("/:carId", auth(), carController.likeCar);
router.delete("/:carId", auth(), carController.deleteCar);

module.exports = router;
