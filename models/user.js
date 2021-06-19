'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
    }
  };
  User.init({
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    nome: DataTypes.STRING,
    genero: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    dataNasc: DataTypes.STRING,
    tel: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};