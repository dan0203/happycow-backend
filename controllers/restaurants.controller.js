// Service
const restaurantsServices = require('../services/restaurants.services');

const getAll = (req, res) => {
    try {
        const restaurants = restaurantsServices.getAll(req.query);

        return res.status(200).json(restaurants);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneById = (req, res) => {
    try {
        const restaurant = restaurantsServices.getOneById(req.params);

        return res.status(200).json(restaurant);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = { getAll, getOneById };
