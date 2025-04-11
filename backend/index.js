require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Importa routers
const submitRoutes = require('./routes/submit');
const jobRoutes = require('./routes/jobs');

// Usa las rutas
app.use('/api', submitRoutes);
app.use('/api', jobRoutes);

// Configuración del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
