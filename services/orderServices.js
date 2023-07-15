const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class OrderServices {

    constructor(){
        this.table = models.Order
    }

    async get(){
        const list = await this.table.findAll({
            include: [
                {
                    association: 'customer',
                    include: ['user']
                },
                {
                    association: 'listProduct',
                    include: ['product',{
                        association:'productDetail',
                        include:['ingredient']
                    }]
                },
            ]   
        });
        return list; 
    }
    async create(order){
        const data = await this.table.create(order)
        return data;
    }
    async update(data, id){
        const order = await this.table.findByPk(id);
        if(!order){
            throw boom.notFound('order not found')
        }
        const updateOrder = await order.update(data);
        return { updated: true, updateOrder };
    }
    async delete (id){
        const order = await this.table.findByPk(id);
        if(!order){
            throw boom.notFound('order not found')
        }
        await order.destroy();
        return { deleted: true, order };
    }
}

module.exports = OrderServices;