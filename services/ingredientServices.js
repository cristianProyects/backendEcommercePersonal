const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class IngredientServices {

    constructor(){
        this.table = models.Ingredient
    }

    async get(){
        const list = await this.table.findAll();
        return list; 
    }
    async create(ingredient){
        const data = await this.table.create(ingredient)
        return data;
    }
    async update(data, id){
        const ingredient = await this.table.findByPk(id);
        if(!ingredient){
            throw boom.notFound('ingredient not found')
        }
        const updateIngredient = await ingredient.update(data);
        return { updated: true, updateIngredient };
    }
    async delete (id){
        const ingredient = await this.table.findByPk(id);
        if(!ingredient){
            throw boom.notFound('ingredient not found')
        }
        await ingredient.destroy();
        return { deleted: true, ingredient };
    }
}

module.exports = IngredientServices;