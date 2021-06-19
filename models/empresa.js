'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Empresa.hasMany(models.Vaga);
    }
  };
  Empresa.init({
    cnpj: DataTypes.STRING,
    nome: DataTypes.STRING,
    tel: DataTypes.STRING,
    endereco: DataTypes.STRING,
    nomeProp: DataTypes.STRING,
    cpfProp: DataTypes.STRING,
    ramoEmp: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresa',
  });
  return Empresa;
};