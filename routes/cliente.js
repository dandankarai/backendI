const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');
const nomeMiddleware = require('../middlewares/nomeMiddleware');
const sobrenomeMiddleware = require('../middlewares/sobrenomeMiddleware');
const idadeMiddleware = require('../middlewares/idadeMiddleware');

/* GET clientes listing. */
router.get('/', clienteController.findAll);

/* POST clientes listing. */
router.post('/',
  nomeMiddleware.validateName,
  clienteController.save);

/* DELETE clientes listing. */
router.delete('/:id', clienteController.remove);

/* PUT clientes listing. */
router.put('/', clienteController.update);

/* POST clientes*/
router.post('/', nomeMiddleware.validateName,
  sobrenomeMiddleware.validateFamilyName,
  idadeMiddleware.validateAge,
  clienteController.save
);

module.exports = router;