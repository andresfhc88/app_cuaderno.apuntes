const express = require('express');
const sequelize = require('./config/db');
const Venta = require('./models/Venta');
const Gasto = require('./models/Gasto');
const Entrada = require('./models/Entrada');

const app = express();
app.use(express.json());

// Sincronizar tablas
sequelize.sync().then(() => {
  console.log('📦 Tablas sincronizadas en PostgreSQL');
});

// Ejemplo de rutas
app.post('/ventas', async (req, res) => {
  try {
    const venta = await Venta.create(req.body);
    res.json(venta);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/gastos', async (req, res) => {
  try {
    const gasto = await Gasto.create(req.body);
    res.json(gasto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/entradas', async (req, res) => {
  try {
    const entrada = await Entrada.create(req.body);
    res.json(entrada);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(4000, () => console.log('Servidor en puerto 4000'));