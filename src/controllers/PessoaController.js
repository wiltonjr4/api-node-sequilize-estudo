const Controller = require('./Controller.js');
const PessoaServices = require('../services/pessoaServices.js');

const pessoServices = new PessoaServices();

class PessoaController extends Controller {
  constructor() {
    super (pessoServices);
  }
}

module.exports = PessoaController;