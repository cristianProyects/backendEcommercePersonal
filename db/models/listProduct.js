const { Model, DataTypes } = require('sequelize');

const { PRODUCT_TABLE } = require('./productsModel');
const { ORDER_TABLE } = require('./orderModel');
const { PRODUCT_DETAIL_TABLE } = require('./productDetailModel');

const LIST_PRODUCT_TABLE = 'lista_productos';

const ListProductSchema =  {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    orderId: {
        field: 'pedido_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: ORDER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    productId: {
        field: 'producto__id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: PRODUCT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    }
}

class ListProduct extends Model {

    static associate(models) {
       // associate
        this.belongsTo(models.Product,{as:'product'});
        this.hasMany(models.ProductDetail, { 
            as:'productDetail',
            foreignKey: 'listProductId'
        })
        // this.belongsTo(models.Ingredient,{as:'ingredient'});
        // this.belongsToMany(models.Customer, { // n:m
        //     as: 'items-order',
        //     through: models.Order,
        //     foreignKey: 'productDetailId',
        //     otherKey: 'customerId'
        // });  
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: LIST_PRODUCT_TABLE,
            modelName: 'ListProduct',
            timestamps: false
        }
    }
}

module.exports = { ListProduct, ListProductSchema, LIST_PRODUCT_TABLE };
