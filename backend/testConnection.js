const sequelize = require('./config/bd');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión a PostgreSQL exitosa!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al conectar a PostgreSQL:', error);
    process.exit(1);
  }
}

testConnection();
