// Modules npm
const express = require('express');
const router = express.Router();
// Modules internes
const restaurantsControllers = require('../controllers/restaurants.controller');

router.get('/', restaurantsControllers.getAll);
router.get('/:id', restaurantsControllers.getOneById);

module.exports = router;
