const express = require('express');
const axios = require('axios');

const router = express.Router();

// Función para obtener las vacantes desde Airtable
const getJobs = async () => {
    try {
        const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME_JOB}?filterByFormula={Status}="Activo"`;
        const config = {
            headers: {
                Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await axios.get(url, config);
        return response.data;
    } catch (error) {
        console.error('Error al obtener las vacantes desde Airtable:', error);
        throw error;
    }
};

// Definir la ruta GET para obtener todas las vacantes
router.get('/jobs', async (req, res) => {
    try {
        const jobs = await getJobs();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las vacantes' });
    }
});

module.exports = router;
