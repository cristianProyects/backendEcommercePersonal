const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'usuarios';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'correo',
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'contrasena',
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'cliente'
  },
}

class User extends Model {
  static associate(models) {
    // associate
    this.hasOne(models.Customer, { // relacion 1:1 para que al consumir los usuarios se vea tambien la informacion de la tabla clientes
      as:'customer',
      foreignKey: 'idUsuario'
    })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}


module.exports = { USER_TABLE, UserSchema, User }