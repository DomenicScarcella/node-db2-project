// DO YOUR MAGIC
const express = require('express');
const Car = require('./cars-model.js');
const mw = require('./cars-middleware.js');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll();
        res.json(cars);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', mw.checkCarId, async (req, res, next) => {
    res.json(req.car);
});

router.post('/', mw.checkCarPayload, mw.checkVinNumberValid, mw.checkVinNumberUnique, async (req, res, next) => {
    try {
        const car = await Car.getAll();
        res.json(car);
    } catch (err) {
        next(err);
    }
});


module.exports = router;