const express = require('express');
const router = express.Router();
const Laudo = require('../models/laudo');

// Criar um novo laudo (POST /laudos)
router.post('/laudos', async (req, res) => {
  const { data, crm, texto, arquivo } = req.body;

  if (!data || !crm || !texto || !arquivo) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const laudo = new Laudo({ data, crm, texto, arquivo });
    await laudo.save();

    res.status(201).header('Location', `/laudos/${laudo._id}`).json({ message: 'Laudo criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar o laudo.', error: error.message });
  }
});

// Listar todos os laudos (GET /laudos)
router.get('/laudos', async (req, res) => {
  try {
    const laudos = await Laudo.find().limit(50); // Limitando a 50 registros
    res.status(200).json(laudos);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar laudos' });
  }
});

// Consultar um laudo pelo ID (GET /laudos/:id)
router.get('/laudos/:id', async (req, res) => {
  try {
    const laudo = await Laudo.findById(req.params.id);
    if (!laudo) {
      return res.status(404).json({ message: 'Laudo não encontrado.' });
    }
    res.status(200).json(laudo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o laudo.', error: error.message });
  }
});

// Buscar laudos por termo (GET /laudos/search?t=termo)
router.get('/laudos/search', async (req, res) => {
  const { t } = req.query;

  if (!t) {
    return res.status(400).json({ message: 'O parâmetro de busca (t) é obrigatório.' });
  }

  try {
    const laudos = await Laudo.find({ texto: { $regex: t, $options: 'i' } }).limit(50);
    res.status(200).json(laudos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar os laudos.', error: error.message });
  }
});

module.exports = router;
