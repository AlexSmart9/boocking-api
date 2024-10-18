const { getAll, create, getOne, remove, update, login, logged } = require('../controllers/user.controllers');
const express = require('express');
const hash = require('../middlewares/hash.middlewares');
const loginMiddlewares = require('../middlewares/login.middlewares');
const sessionJWT = require('../middlewares/sessionJWT.middlewares');
const veriifyJWT = require('../utils/verifyJWT');

const userRouter = express.Router();

userRouter.route('/')
    .get(getAll)
    .post(hash, create);

userRouter.route('/login')
    .post(loginMiddlewares, sessionJWT, login)

userRouter.route('/me')
    .get(veriifyJWT, logged)

userRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = userRouter;