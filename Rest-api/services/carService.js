const Car = require("../models/carModel");

exports.craete = (userId, data) => {
  return Car.create({
    owner: userId,
    createdOn: new Date(),
    ...data,
  });
};

exports.update = (id, data) => {
  return Car.findByIdAndUpdate(id, data, { runValidators: true });
};

exports.delete = (id) => {
  return Car.findByIdAndDelete(id);
};

exports.getAll = () => {
  return Car.find();
};

exports.getAllPopulated = () => {
  return Car.find().populate("likes");
};

exports.getOne = (id) => {
  return Car.findById(id);
};

exports.getOnePopulated = (id) => {
  return Car.findById(id).populate("likes");
};

exports.getLatest = (limit) => {
  return Car.find().sort({ createdOn: -1 }).limit(limit);
};

exports.like = (carId, userId) => {
  return Car.findByIdAndUpdate(carId, { $push: { likes: userId } });
};
