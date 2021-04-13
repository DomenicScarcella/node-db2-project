const Car = require('./cars-model.js');
const db = require('../../data/db-config.js');
const vinValidator = require('vin-validator');

exports.checkCarId = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const car = await Car.getById(req.params.id);
    if (!car) {
      next({status: 404, message: `car with id ${req.params.id} is not found`});
    } else {
      req.car = car;
      next();
    }
  } catch(err) {
    next(err);
  }
};

exports.checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
};

exports.checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  const {vin} = req.body;
  const isVinValid = vinValidator.validate(vin);
  if (!isVinValid) {
    res.status(400).json({message: `vin ${vin} is invalid`});
  } else {
    next();
  }
};

exports.checkVinNumberUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const existing = await db('cars').where('vin', req.body.vin.trim()).first()
    if (existing) {
      next({ status: 400, message: `vin ${req.body.vin.trim()} already exists`});
    } else {
      next();
    }
  } catch(err) {
    next(err);
  }
};
