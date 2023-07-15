const { Model, DataTypes } = require('sequelize');

const INGREDIENT_TABLE = 'ingredientes';

const IngredientSchema =  {
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

class Ingredient extends Model {

    static associate(models) {
        // associate 
        this.hasMany(models.ProductDetail,{
            as:'ingredients',
            foreignKey:'ingredientId'
        })   
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: INGREDIENT_TABLE,
            modelName: 'Ingredient',
            timestamps: false
        }
    }
}

module.exports = { Ingredient, IngredientSchema, INGREDIENT_TABLE };
