var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bio: DataTypes.TEXT,
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Email address already in use!",
        },
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        // set(value) {
        //   this.setDataValue('password', bcrypt.hashSync(value, bcrypt.getSaltSync(10), null));
        // }
      },
    },
    {
      underscored: true,
      freezeTableName: true,
    }
  );

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  User.associate = function (models) {
    User.hasMany(models.Video, {
      foreignKey: "user_id",
    });
  };
  return User;
};
