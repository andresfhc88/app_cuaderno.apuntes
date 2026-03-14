const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Gasto = sequelize.define('Gasto', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING, // Ej: "Servicios", "Insumos", "Transporte"
    allowNull: true
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Gasto;