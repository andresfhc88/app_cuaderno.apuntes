const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Cuaderno_apuntes', 'postgres', '0000', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('✅ Conectado a PostgreSQL'))
  .catch(err => console.error('❌ Error de conexión:', err));

module.exports = sequelize;