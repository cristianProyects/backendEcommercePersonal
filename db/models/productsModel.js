const { Model, DataTypes } = require('sequelize');

const PRODUCT_TABLE = 'productos';

const ProductSchema =  {
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
    price: {
        allowNull: true,
        type: DataTypes.FLOAT,
        field: 'precio',
    },
}

class Product extends Model {

    static associate(models) {
        
        this.belongsToMany(models.Ingredient, { // n:m
            as: 'productDetail',
            through: models.ProductDetail,
            foreignKey: 'productId',
            otherKey: 'ingredientId'
        });   
        // associate 
        //  (Nombre de la otra tabla en la que tiene la relacion de muchos a muchos){
            // as:'alias para esa relacion de muchos a muchos' ,
            // 
            // through: aqui va el nombre de la tabla que resulta de la relacion de muchos a muchos,
            // foreignKey: 'como se llama la llave foranea que hace relacion a esta tabla',
            // otherKey: 'la otra llave foranea que hace relacion a la otra tabla'
            // 
        // }
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = { Product, ProductSchema, PRODUCT_TABLE };
