'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: {
      type : DataTypes.STRING,
      field: 'name'
    },
    userName: {
      type : DataTypes.STRING,
      field: 'user_name'

    },
    phoneNumber: {
      type : DataTypes.STRING,
      field: 'phone_number'

    },
    address: {
      type : DataTypes.STRING,
      field: 'address'

    },
    email: {
      type : DataTypes.STRING,
      field: 'email'

    },
    password: {
      type : DataTypes.STRING,
      field: 'password'

    },
    createdAt: {
      field: 'created_at',
      type: Date.now()
    },
    updatedAt: {
      field: 'updated_at',
      type: Date.now()
    },

  }, {
      underscored: true,
      freezeTableName: true,
      timestamp: true,
      tableName: 'users'
  });
  User.associate = function(models) {
  };
  return User;
};
