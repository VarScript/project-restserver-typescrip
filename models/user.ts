import { DataTypes } from 'sequelize';
import db from '../db/connection';

const user = db.define('User', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.TINYINT
    }
});

export default user;