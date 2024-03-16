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
    res.status(200).json(await carService.craete(req.user._id, req.body));
  } catch (error) {
    next();
  }
}

async function likeCar(req, res, next) {
  try {
    const { carId } = req.params;
    res.status(200).json(await carService.like(carId, req.user._id));
  } catch (error) {
    next();
  }
}

async function editCar(req, res, next) {
  try {
    const { carId } = req.params;
    res.status(200).json(await carService.update(carId, req.body));
  } catch (error) {
    next();
  }
}

async function deleteCar(req, res, next) {
  try {
    const { carId } = req.params;
    res.status(200).json(await carService.delete(carId));
  } catch (error) {
    next();
  }
}

module.exports = {
  getCars,
  getCar,
  createCar,
  likeCar,
  editCar,
  deleteCar
};
