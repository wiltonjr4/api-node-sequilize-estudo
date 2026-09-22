const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }

  async pegaTodosOsRegistro() {
    return dataSource[this.model].findAll();
  }

  async pegaUmRegistroPorId(id) {
    return dataSource[this.model].findByPk(id);
  }

  async criaRegistro(dadoDoRegistro) {
    return dataSource[this.model].create(dadoDoRegistro);
  }

  async atualizaRegistro(dadosAtualizados, id) {
    const listaRegistrosAtualizados = dataSource[this.model].update(dadosAtualizados, {where: {id: id}});
    if (listaRegistrosAtualizados[0] === 0) {
      return false;
    }
    return true;
  }

  async excluiRegistro(id) {
    return dataSource[this.model].destroy({where: {id: id}});
  }

}

module.exports = Services;