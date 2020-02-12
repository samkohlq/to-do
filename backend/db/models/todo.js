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
  Todo.associate = function(models) {
    // associations can be defined here
  };
  // return model
  return Todo;
};
