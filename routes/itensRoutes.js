const express = require('express');

const ItensControllers = require('../controllers/itensController');

const router = express.Router();

router.get('/', ItensControllers.index)
router.post('/', ItensControllers.create)
router.delete('/:id', ItensControllers.delete)

module.exports = router;