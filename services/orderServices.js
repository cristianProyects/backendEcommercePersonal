const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class OrderServices {

    constructor(){
        this.table = models.Order
        this.options = {
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
        }
    }

    async get(){
        const list = await this.table.findAll(this.options);
        return list; 
    }
    async create(order){
        const data = await this.table.create(order)
        return data;
    }
    async delete (id){
        const order = await this.table.findByPk(id,this.options);
        if(!order){
            throw boom.notFound('order not found')
        }
        await order.destroy();
        return { deleted: true, order };
    }
}

module.exports = OrderServices;