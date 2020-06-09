'use strict';
module.exports = (sequelize, DataTypes) => {
  const Troca = sequelize.define('Troca', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    // idDoador: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    idReceptor: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    status: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Troca.associate = function(models) {
    Troca.belongsTo(models.Usuario, {
      foreignKey: 'idReceptor',
      as: 'solicitante'
    })

    Troca.belongsToMany(models.Item, {
      through: 'itens_trocas',
      foreignKey: 'idTroca',
      as: 'itens'
    })
  };
  return Troca;
};