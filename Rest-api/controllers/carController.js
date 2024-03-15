const carService = require("../services/carService");

async function getCars(req, res, next) {
  try {
    res.status(200).json(await carService.getAll());
  } catch (error) {
    next();
  }
}

async function getCar(req, res, next) {
  try {
    const { carId } = req.params;
    res.status(200).json(await carService.getOne(carId));
  } catch (error) {
    next();
  }
}

async function createCar(req, res, next) {
    try {
      const { userId } = req.user;
      res.status(200).json(await carService.craete(userId, req.body));
    } catch (error) {
      next();
    }
  }

module.exports = {
  getCars,
  getCar,
  createCar
};
