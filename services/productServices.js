const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ProductServices {

    constructor(){
        this.table = models.Product
    }

    async get(){
        const list = await this.table.findAll();
        return list; 
    }
    async create(product){
        const data = await this.table.create(product)
        return data;
    }
    async update(data, id){
        const product = await this.table.findByPk(id);
        if(!product){
            throw boom.notFound('product not found')
        }
        const updateProduct = await product.update(data);
        return { updated: true, updateProduct };
    }
    async delete (id){
        const product = await this.table.findByPk(id);
        if(!product){
            throw boom.notFound('product not found')
        }
        await product.destroy();
        return { deleted: true, product };
    }
}

module.exports = ProductServices;