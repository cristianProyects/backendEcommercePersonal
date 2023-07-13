const { Model, DataTypes } = require('sequelize');

const { CUSTOMER_TABLE } = require('./customerModel');
const { PRODUCT_DETAIL_TABLE } = require('./productDetailModel');

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
    },
    productDetailId: {
        field: 'producto_detalle_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: PRODUCT_DETAIL_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
}

class Order extends Model {

    static associate() {
       // associate
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
