// Modules internes
const restaurants = require('../assets/restaurants.json');

const getAll = data => {
    const { name } = data;

    return restaurants.filter(r => {
        return r.name.toLowerCase().includes(name ? name.toLowerCase() : '');
    });
};

const getOneById = data => {
    const { id } = data;

    return restaurants.filter(r => {
        return Number(r.placeId) === Number(id);
    });
};

module.exports = { getAll, getOneById };
