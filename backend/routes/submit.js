const express = require('express');
const multer = require('multer');
const { handleFormSubmit } = require('../controllers/submitController');

const router = express.Router();

// Configuración de multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Ruta para manejar el envío del formulario
router.post('/submit', upload.single('cv'), handleFormSubmit);

module.exports = router;
