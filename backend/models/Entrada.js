const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Entrada = sequelize.define('Entrada', {
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  monto: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  origen: {
    type: DataTypes.STRING, // Ej: "Inversión", "Préstamo", "Otros"
    allowNull: true
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Entrada;