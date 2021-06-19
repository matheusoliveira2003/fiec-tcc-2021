'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vaga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vaga.belongsTo(models.Empresa);
    }
  };
  Vaga.init({
    nomeEmp: DataTypes.STRING,
    descricao: DataTypes.STRING,
    reqVaga: DataTypes.STRING,
    localEmp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vaga',
  });
  return Vaga;
};