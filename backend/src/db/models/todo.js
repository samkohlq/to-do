"use strict";
module.exports = (sequelize, DataTypes) => {
  // define the model
  const Todo = sequelize.define(
    "Todo",
    {
      value: DataTypes.STRING,
      completed: DataTypes.BOOLEAN
    },
    {}
  );
  // return model
  return Todo;
};
