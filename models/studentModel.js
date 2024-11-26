const { DataTypes } = require('sequelize');
const { sequelize } = require('.');

const Student = sequelize.define(
  'Students',
  {
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Registration_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Degree: {
      type: DataTypes.TEXT('long'),
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'start',
    },
  },
  {
    tableName: 'Students', // Specifies actual table name in the database
    indexes: [{ unique: true, fields: ['Username'] }],
  },
);

module.exports = { Student }; // Export the model
