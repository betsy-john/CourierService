'use strict';
module.exports = (sequelize, DataTypes) => {
  const registerUser = sequelize.define('registerUser', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  registerUser.associate = function(models) {
    // associations can be defined here
  };
  return registerUser;
};