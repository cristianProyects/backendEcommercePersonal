const { Model, DataTypes } = require('sequelize');

const { USER_TABLE } = require('./usersModel')// Nombre de la table a la que tiene relacion

const CUSTOMER_TABLE = 'clientes';

const CustomerSchema =  {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'nombre',
  },
  lastNames: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'apellidos',
  },
  phone: {
    allowNull: true,
    type: DataTypes.STRING,
    field: 'telefono',
  },
  userId: {
    // allowNull: false,
    field: 'idUsuario',
    type: DataTypes.INTEGER,
    unique: true,
    references: {
        model: USER_TABLE,
        key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Customer extends Model {

  static associate(models) {
    this.belongsTo(models.User, {as: 'user'}); // relacion de 1:1 para que al consumur los clientes tambien se vea la info de usuario
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false
    }
  }
}

module.exports = { Customer, CustomerSchema, CUSTOMER_TABLE };
