const express = require('express');
const router = express.Router();

// Rota para listar todos os laudos
router.get('/laudos', async (req, res) => {
  try {
    // Sua lógica para buscar laudos no banco de dados
    const laudos = []; // Simule com um array vazio para testar
    res.status(200).json(laudos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao buscar laudos" });
  }
});

// Rota para criar um laudo
router.post('/laudos', async (req, res) => {
  try {
    const { data, crm, texto, arquivo } = req.body;
    if (!data || !crm || !texto || !arquivo) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }
    // Lógica para salvar o laudo no banco de dados (substituir por código real)
    res.status(201).json({ message: "Laudo criado com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Erro ao criar laudo" });
  }
});

router.post('/teste', (req, res) => {
  res.status(200).json({ message: "Rota de teste funcionando!" });
});


// Exportar o roteador para uso no app principal
module.exports = router;
