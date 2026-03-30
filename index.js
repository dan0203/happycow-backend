// Modules npm
require('dotenv').config();
const express = require('express');
const cors = require('cors');
// Modules internes
const restaurantsRoutes = require('./routes/restaurants.routes');

// Création de l'app
const app = express();
app.use(cors());

// Routes
app.get('/', (req, res) => {
    try {
        return res.status(200).json('Le serveur HappyCow est happy de vous accueillir !');
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});
app.use('/restaurants', restaurantsRoutes);
app.all(/.*/, (req, res) => {
    return res.status(404).json({ message: 'The route does not exist' });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});
