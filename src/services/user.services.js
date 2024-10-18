const {user} = require('../models')

const getAllServices = async () => {
    return await user.findAll()
}

const createServices = async (user) => {
    return await user.create(user)
}

const getOneServices = async (id) => {
    return await user.findByPk(id)
}

const removeServices = async (id) => {
    return await user.destroy({where: {id}})
}

const updateServices = async (id, user) => {
    return await user.update(
        user, 
        {where:{id}, returning:true}
    )
}

module.exports = {
    getAllServices,
    createServices,
    getOneServices,
    removeServices,
    updateServices
}