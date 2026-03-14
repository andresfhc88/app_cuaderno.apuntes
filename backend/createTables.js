const sequelize = require('./config/bd');
const Venta = require('./models/Ventas');

async function crearTablas() {
  try {
    // Sincroniza los modelos con la base de datos
    // force: false no elimina las tablas existentes
    await sequelize.sync({ force: false });
    
    console.log('✅ Tabla "Ventas" creada/sincronizada exitosamente!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error al crear la tabla:', error);
    process.exit(1);
  }
}

crearTablas();
