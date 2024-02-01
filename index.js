const Usuario = require('./models/usuario');

exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    // Consulta todas las tareas en la base de datos
    const Usuarios = await Usuario.findAll({
      attributes: ['id', 'nombre', 'email', 'contrasena'],
    });
    

    return {
      statusCode: 200,
      body: JSON.stringify(Usuarios),
    };
  } catch (error) {
    console.error('Error al consultar Usuarios:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error interno del servidor' }),
    };
  }
};
