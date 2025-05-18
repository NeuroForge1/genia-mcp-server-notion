// Versión simplificada del servidor MCP para Notion
// Esta es una solución alternativa para el despliegue en Render

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// Ruta principal
app.get('/', (req, res) => {
  res.send('Notion MCP Server funcionando correctamente');
});

// Health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Status API
app.get('/api/v1/status', (req, res) => {
  res.json({
    status: 'online',
    version: '1.0.0',
    service: 'notion-mcp'
  });
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});
