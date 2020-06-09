const express = require('express');

const UsuarioController = require('../controllers/usuarioController');

const router = express.Router();

router.post('/', UsuarioController.create);
router.post('/auth', UsuarioController.auth);

module.exports = router;