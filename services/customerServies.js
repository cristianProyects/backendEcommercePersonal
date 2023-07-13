const bcrypt = require('bcrypt');
const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class CustomerService {

    constructor() {
        this.table = models.Customer
    }

    async find() {
        const rta = await this.table.findAll({
            include: ['user']
        });
        return rta;
    }

    async findOne(id) {
        const user = await this.table.findByPk(id, { include: ['user'] });
        if (!user) {
            throw boom.notFound('customer not found');
        }
        return user;
    }

    async create(customer) {
        const hash  = await bcrypt.hash(customer.user.password,10);
        const data = {
            ...customer,
            user:{
                ...customer.user,
                password: hash
            }
        }
        const newCustomer = await this.table.create(data, {
            include: ['user']
        });
        return newCustomer;
    }

    async update(changes, id) {
        const customer = await this.table.findByPk(id);
        await customer.update(changes);
        return { updated: true, customer };
    }

    async delete(id) {
        const customer = await this.table.findByPk(id);
        await customer.destroy();
        return { deleted: true, customer };
    }

}

module.exports = CustomerService;
