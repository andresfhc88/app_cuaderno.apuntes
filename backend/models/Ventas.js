const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const Venta = sequelize.define('Venta', {
  factura: {
    type: DataTypes.STRING,
    allowNull: false
  },
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  metodoPago: {
    type: DataTypes.ENUM('Efectivo', 'Tarjeta', 'QR'),
    allowNull: false
  },
  caja: {
    type: DataTypes.ENUM('Principal', 'Menos'),
    allowNull: true
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Venta;