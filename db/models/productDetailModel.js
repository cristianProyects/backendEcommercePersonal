const { Model, DataTypes } = require('sequelize');

const { PRODUCT_TABLE } = require('./productsModel');
const { INGREDIENT_TABLE } = require('./ingredientModel');

const PRODUCT_DETAIL_TABLE = 'producto_detalle';

const ProdcutDetailSchema =  {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    portion: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'porcion',
    },
    ingredientId: {
        field: 'ingrediente_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: INGREDIENT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    productId: {
        field: 'producto_id',
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

class ProductDetail extends Model {

    static associate(models) {
       // associate
        this.belongsToMany(models.Customer, { // n:m
            as: 'items-order',
            through: models.Order,
            foreignKey: 'productDetailId',
            otherKey: 'customerId'
        });  
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_DETAIL_TABLE,
            modelName: 'ProductDetail',
            timestamps: false
        }
    }
}

module.exports = { ProductDetail, ProdcutDetailSchema, PRODUCT_DETAIL_TABLE };
