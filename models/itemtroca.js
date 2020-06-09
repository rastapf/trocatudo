'use strict';
module.exports = (sequelize, DataTypes) => {
  const ItemTroca = sequelize.define('ItemTroca', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    idTroca: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    idItem: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'itens_trocas'
  });
  ItemTroca.associate = function(models) {
    ItemTroca.belongsTo(models.Troca, {
      foreignKey: 'idTroca'
    })

    ItemTroca.belongsTo(models.Item, {
      foreignKey: 'idItem'
    })
  };
  return ItemTroca;
};