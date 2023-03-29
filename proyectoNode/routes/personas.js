const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personas')

router.get('/altaPersona',personaController.getAltaPersona);

module.exports =router;