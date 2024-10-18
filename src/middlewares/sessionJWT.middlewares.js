const jwt = require('jsonwebtoken')

const sessionJWT = (req, res, next) => {
    const user = req.userLogged

    const token = jwt.sign(
        {user},
        process.env.TOKEN_SECRET,
        {expiresIn: '1d'}
    )

    req.tokem = token 
    next()
}

module.exports = sessionJWT