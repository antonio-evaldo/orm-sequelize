const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router
    .get('/pessoas', PessoaController.obtemTodasAsPessoas)
    .get('/pessoas/:id', PessoaController.obtemUmaPessoa)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.apagaPessoa)

module.exports = router;