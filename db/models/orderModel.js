const { Model, DataTypes } = require('sequelize');

const { CUSTOMER_TABLE } = require('./customerModel');

const ORDER_TABLE = 'pedidos';

const OrderSchema =  {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    customerId: {
        field: 'cliente_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CUSTOMER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class Order extends Model {

    static associate(models) {
       // associate
        this.belongsTo(models.Customer, {
            as: 'customer',
        });
        this.hasMany(models.ListProduct,{
            as:'listProduct',
            foreignKey:'orderId'
        })
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: 'Order',
            timestamps: false
        }
    }
}

module.exports = { Order, OrderSchema, ORDER_TABLE };
