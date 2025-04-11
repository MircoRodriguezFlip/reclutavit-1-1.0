const axios = require('axios');
const filestack = require('filestack-js');

// Inicializa Filestack
const client = filestack.init(process.env.FILESTACK_API_KEY);

async function uploadFileToFilestack(file) {
    try {
        const options = {
            onProgress: (progress) => console.log('Progreso de carga:', progress),
        };
        const result = await client.upload(file.buffer, options);
        return result.url;
    } catch (error) {
        console.error('Error al cargar archivo en Filestack:', error);
        throw new Error('Error al cargar archivo en Filestack.');
    }
}

exports.handleFormSubmit = async (req, res) => {
    const { nombre, telefono, email, estado, vacanteId } = req.body;
    const cv = req.file;

    try {
        let fileUrl = null;
        if (cv) {
            const allowedFormats = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'image/jpeg',
                'image/png',
            ];
            const maxSize = 2 * 1024 * 1024; // 2 MB

            if (!allowedFormats.includes(cv.mimetype)) {
                return res.status(400).json({ message: 'Formato de archivo no permitido. Usa PDF, Word o imágenes (JPEG/PNG).' });
            }

            if (cv.size > maxSize) {
                return res.status(400).json({ message: 'El archivo es demasiado grande. Máximo 2 MB.' });
            }

            fileUrl = await uploadFileToFilestack(cv);
        }

        // Guardar datos en Airtable
        await axios.post(
            `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/${process.env.AIRTABLE_TABLE_NAME_FORM}`,
            {
                fields: {
                    nombre,
                    teléfono: telefono,
                    email,
                    estado,
                    CV: fileUrl ? [{ url: fileUrl }] : [],
                    job: vacanteId ? [vacanteId] : [],
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
};
