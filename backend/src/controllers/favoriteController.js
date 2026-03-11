const Favorite = require("../models/Favorite");

exports.addFavorite = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    const favorite = new Favorite({ user: userId, item: itemId });
    await favorite.save();
    res.status(201).json(favorite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.removeFavorite = async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.params.id });
    res.json(favorites);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
