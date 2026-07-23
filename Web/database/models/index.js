'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.json')[env];
const db = {};

let sequelize;
if (process.env.DATABASE_URL || process.env.MYSQL_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL || process.env.MYSQL_URL, {
    dialect: 'mysql',
    logging: false
  });
} else if (config.use_env_variable && process.env[config.use_env_variable]) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  const host = process.env.DB_HOST || config.host || '127.0.0.1';
  const username = process.env.DB_USER || config.username || 'root';
  const password = process.env.DB_PASSWORD !== undefined ? process.env.DB_PASSWORD : config.password;
  const database = process.env.DB_NAME || config.database || 'fulllhouse';
  const port = process.env.DB_PORT || config.port || 3306;

  sequelize = new Sequelize(database, username, password, {
    ...config,
    host: host,
    port: port,
    dialect: 'mysql',
    logging: false
  });
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
