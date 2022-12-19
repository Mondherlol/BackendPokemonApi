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
  pokemons: [

  ]
})

module.exports = mongoose.model('Users', UserSchema)