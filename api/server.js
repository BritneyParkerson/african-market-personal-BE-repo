const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('../auth/authRouter.js');
const productsRouter = require('../products/productsRouter.js');
const catRouter = require('../categories/catRouter.js');
const verify = require('../auth/authMiddleware.js')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger);

server.use('/api/auth', authRouter);
server.use('/api/products', verify,productsRouter);
server.use('/api/categories', verify, catRouter);

server.get('/', (req, res) => {
	res.send(MOTD);
});

function logger(req, res, next) {
	console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get('host')}`);
	next();
}


module.exports = server;