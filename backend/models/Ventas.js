const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  factura: String,
  monto: Number,
  metodoPago: { type: String, enum: ['Efectivo', 'Tarjeta', 'QR'] },
  caja: { type: String, enum: ['Principal', 'Menos'], default: 'Principal' },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Venta', ventaSchema);