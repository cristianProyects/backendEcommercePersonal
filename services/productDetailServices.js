const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class ProductDetailServices {

    constructor(){
        this.table = models.ProductDetail
    }

    async get(){
        const list = await this.table.findAll();
        return list; 
    }
    async create(productDetail){
        const data = await this.table.create(productDetail)
        return data;
    }
    async update(data, id){
        const productDetail = await this.table.findByPk(id);
        if(!productDetail){
            throw boom.notFound('productDetail not found')
        }
        const updateProductDetail = await productDetail.update(data);
        return { updated: true, updateProductDetail };
    }
    async delete (id){
        const productDetail = await this.table.findByPk(id);
        if(!productDetail){
            throw boom.notFound('productDetail not found')
        }
        await productDetail.destroy();
        return { deleted: true, productDetail };
    }
}

module.exports = ProductDetailServices;