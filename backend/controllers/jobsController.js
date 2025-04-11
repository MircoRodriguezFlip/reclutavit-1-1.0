const axios = require('axios');

exports.getJobsController = async (req, res) => {
    try {
        const url = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME_JOB}?filterByFormula={Status}="Activo"`;
        const config = {
            headers: {
                Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
                'Content-Type': 'application/json',
            },
        };

        const response = await axios.get(url, config);
        // Ordena los registros de forma descendente por createdTime
        response.data.records.sort((a, b) => new Date(b.createdTime) - new Date(a.createdTime));
        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error al obtener las vacantes:', error);
        res.status(500).json({ message: 'Error al obtener las vacantes' });
    }
};
