require('dotenv').config();
const db = require('./models/index.js');
const express = require('./config/express.js');

db.sequelize
    .sync()
    .then(async () => {
        console.log('db 연결 성공');
    })
    .catch(console.error);

express().listen(process.env.server_port || 3000);
console.log(`${process.env.node_env} - API Server Start At Port ${process.env.server_port || 3000}`);
