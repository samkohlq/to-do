/** set up db as an exported variable */

"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

/*
 * initialize Sequelize with configuration file information
 * establish connection to database
 */
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

/*
 * create a new Sequelize Model for each file in the models folder
 */
// read current directory
fs.readdirSync(__dirname)
  // for each file that ends with .js
  .filter(file => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  // assume that file references a model and save that to the db object
  .forEach(file => {
    // create new model from each file in models directory
    const model = sequelize["import"](path.join(__dirname, file));
    // save model to db object
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// assign sequelize instance to db object
// lowercase is the instance, uppercase is the class
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
