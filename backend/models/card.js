const mongoose = require('mongoose');
const { default: isURL } = require('validator/lib/isURL');

// const cardSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//     minlength: 2,
//     maxlength: 30,
//   },
//   link: {
//     type: String,
//     required: true,
//     minlength: 2,
//     validate: {
//       validator: (v) => isURL(v),
//       message: 'Неправильный формат ссылки',
//     },
//   },
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user',
//     required: true,
//   },
//   likes: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'user',
//     default: [],
//   }],
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

const cardSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,

  },
  trailerLink: {
    type: String,
    required: true,

  },
  thumbnail: {
    type: String,
    required: true,

  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  movieId: {
    type: String,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('card', cardSchema);
