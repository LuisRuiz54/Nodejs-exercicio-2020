'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  };
  Tasklist.init({
    id_lugar: DataTypes.INTEGER,
    nome_lista: DataTypes.STRING,
    visitou_lista: DataTypes.BOOLEAN,
    comentarios_lista: DataTypes.STRING,
    valor_lista: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tasklist',
  });
  return Tasklist;
};