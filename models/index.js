'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const { INTEGER } = require('sequelize');
const { text } = require('body-parser');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
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



// sequelize model:generate --name User --attributes name:string,username:string,password:string

// sequelize model:generate --name Card --attributes name:string,type:string,subtype:string,cost:INTEGER,colors:string,colorIdentity:string,uniqueId:string,imageUrl:text,basicLand:boolean

// sequelize model:generate --name List --attributes name:string,description:text,quantity:INTEGER,stats:string,status:string,completed:boolean,wishlist:Boolean

// sequelize model:generate --name CardList --attributes cardId:INTEGER,listId:INTEGER
