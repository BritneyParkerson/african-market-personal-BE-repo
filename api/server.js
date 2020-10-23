const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter.js');
const productsRouter = require('../products/productsRouter.js');
const catRouter = require('../categories/catRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger);

server.use('/api/auth', authRouter);
server.use('/api/products', productsRouter);
server.use('/api/categories', catRouter);

server.get('/', (req, res) => {
	res.send('Server is running!');
});

function logger(req, res, next) {
	console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('host')}`);
	next();
}

const session = require("express-session");

const sessionConfig = {
    name: "AMPsecrets",
    secret: "Africa's best kept secret!",
    cookie: {
        maxAge: 1000 * 120,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUnintialized: false,
};
server.use(session(sessionConfig));


module.exports = server;