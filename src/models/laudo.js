const mongoose = require('mongoose');


const LaudoSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  crm: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    required: true,
  },
  arquivo: {
    type: Buffer,
    required: true,
  },
}, {
  timestamps: true, // Para adicionar campos de criação e atualização automática
});

module.exports = mongoose.model('Laudo', LaudoSchema);
