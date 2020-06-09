const express = require('express')

const DoacoesController = require('../controllers/doacoesController')

const router = express.Router();

router.get('/', DoacoesController.index)
router.post('/', DoacoesController.create)
router.post('/finalizar', DoacoesController.close)

module.exports = router;