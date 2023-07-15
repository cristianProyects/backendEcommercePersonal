const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ListProductServices {

    constructor(){
        this.table = models.ListProduct
    }

    async get(){
        const list = await this.table.findAll({
            include: ['product']
        });
        return list; 
    }
    async create(listProduct){
        const data = await this.table.create(listProduct)
        return data;
    }
    async update(data, id){
        const listProduct = await this.table.findByPk(id);
        if(!listProduct){
            throw boom.notFound('listProduct not found')
        }
        const updateListProduct = await listProduct.update(data);
        return { updated: true, updateListProduct };
    }
    async delete (id){
        const listProduct = await this.table.findByPk(id);
        if(!listProduct){
            throw boom.notFound('listProduct not found')
        }
        await listProduct.destroy();
        return { deleted: true, listProduct };
    }
}

module.exports = ListProductServices;