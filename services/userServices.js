const bcrypt =  require('bcrypt');
const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class UserServices {

    constructor(){
        this.table = models.User
    }

    async getUsers(){
        const listUsers = await this.table.findAll({include:['customer']});
        return listUsers; 
    }
    async createUsers(user){
        const hash  = await bcrypt.hash(user.password,10);
        const data = await this.table.create({
            ...user,
            password: hash
        })
        delete data.dataValues.password; // delete password
        return data;
    }
    async updateUsers(data, id){
        const user = await this.table.findByPk(id);
        if(!user){
            throw boom.notFound('user not found')
        }
        const update = await user.update(data);
        return update;
    }
    async findByEmail (email){
        const user = await this.table.findOne({
            where: {
                email
            }
        })
        return user;
    }
    async deleteUsers (id){
        const user = await this.table.findByPk(id);
        if(!user){
            throw boom.notFound('user not found')
        }
        const deleteUser = await user.destroy();
        return deleteUser;
    }
}

module.exports = UserServices;