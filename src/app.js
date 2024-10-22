const express = require('express');
const laudosRoutes = require('./routes/laudos');

const app = express();

// Middleware para analisar o corpo das requisições JSON
app.use(express.json());

// Usar as rotas de laudos com o prefixo /api
app.use('/api', laudosRoutes);

// Iniciando o servidor
app.listen(9999, () => {
  console.log('Servidor rodando na porta 9999');
});
