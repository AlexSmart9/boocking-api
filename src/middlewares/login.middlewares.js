const bcrypt = require('bcrypt')
const user = require('../models/user')


const loginMiddlewares = async(req, res, next) => {
    const {email, password} = req.body

    const user = await user.findOn({where: {email}})
    if(!user) return res.sendStatus(401).json("Invalid credentials")

    const isVaid = await bcrypt.compare(password, user.password)
    if(!isValid) return res.sendStatus(401).json("Invalid credentials")
    
    req.userLogged = user

    next()

}

module.exports= loginMiddlewares