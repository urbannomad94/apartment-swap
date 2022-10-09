const User = require('../models/User');

module.exports = {
  getFavorites: async (req, res) => {
    try {
      const user = await User.find({ _id: req.user.id });
      const favorites = user[0].favorites;
      res.render('favorites.ejs', { favorites: favorites });
    } catch (err) {
      console.log(err);
    }
  },
};
