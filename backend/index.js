require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');

// Configura middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para manejar el envío de datos y archivo
app.post('/submit', async (req, res) => {
    const { nombre, telefono, email, estado } = req.body;

    try {
        // Guardar los datos en Airtable
        const response = await axios.post(
            `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME}`,
            {
                fields: {
                    nombre: nombre,
                    teléfono: telefono,
                    email: email,
                    estado: estado,
                },
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.status(200).json({ message: 'Datos enviados correctamente.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Hubo un problema al procesar el formulario.' });
    }
});

// Configurar el servidor para escuchar en el puerto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
