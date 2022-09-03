module.exports = function(sequelize, DataTypes) {
  var Cast = sequelize.define("Cast", {
    id: { // person_id
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    character: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    credit_id: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cast_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profile_path: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });

  Cast.associate = function(models) {
    Cast.belongsToMany(models.Video, {
      through: models.Video_Cast,
      foreignKey: "cast_id"
    });
  };
  return Cast;
};
