const express = require('express');
const router = express.Router();

const encuestasController = require('../controllers/encuestasController');

router.get('/add', encuestasController.add)
router.post('/publicar', encuestasController.pub)
router.get('/elim/:id', encuestasController.elim)
router.post('/edit/:id', encuestasController.edit)
router.get('/ver/:id', encuestasController.ver)

module.exports = router;