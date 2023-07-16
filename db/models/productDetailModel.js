const { Model, DataTypes } = require('sequelize');

const { LIST_PRODUCT_TABLE } = require('./listProduct');
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
        onDelete: 'CASCADE'
    },
    listProductId: {
        field: 'producto_lista_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: LIST_PRODUCT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
}

class ProductDetail extends Model {

    static associate(models) {
       // associate
        // this.belongsTo(models.Product,{as:'product'});
        this.belongsTo(models.Ingredient,{as:'ingredient'});
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
            tableName: PRODUCT_DETAIL_TABLE,
            modelName: 'ProductDetail',
            timestamps: false
        }
    }
}

module.exports = { ProductDetail, ProdcutDetailSchema, PRODUCT_DETAIL_TABLE };
