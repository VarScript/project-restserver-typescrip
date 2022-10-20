import { Sequelize } from 'sequelize';

const db = new Sequelize('node-ts', 'root', 'tu_password', {
    host: '192.168.0.5',
    port: 3306,
    dialect: 'mysql',
    // logging: false
});

export default db;
