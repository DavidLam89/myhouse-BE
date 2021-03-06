const express = require('express');
const cors = require('cors');

const usersRouter = require('../users/usersRouter.js');
const housesRouter = require('../houses/housesRouter.js');
const server = express();

server.use(express.json());
server.use(cors());
server.options('*', cors());

server.use('/api/users', usersRouter);
server.use('/api/houses', housesRouter);

server.get('/', async (req, res) => {
  res.status(200).json({ message: 'MyHouse API running' });
});

module.exports = server;
