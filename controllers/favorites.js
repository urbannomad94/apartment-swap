const User = require('../models/User');
const countries = require('../public/countries');

module.exports = {
  getFavorites: async (req, res) => {
    try {
      const user = await User.find({ _id: req.user.id });
      const favorites = user[0].favorites;
      res.render('favorites.ejs', {
        favorites: favorites,
        countries: countries,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
