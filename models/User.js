const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  
  nom: {
    type: String,
    required: true
  },
  mdp: {
    type: String,
    required: true
  },
  pokemons: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('Users', UserSchema)