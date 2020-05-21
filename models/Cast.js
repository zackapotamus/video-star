module.exports = function(sequelize, DataTypes) {
  var Cast = sequelize.define("Cast", {
    id: { // cast id
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
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
    person_id: {
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

  Genre.associate = function(models) {
    Genre.belongsToMany(models.Video, {
      through: models.Video_Cast,
      foreignKey: "cast_id"
    });
  };
  return Genre;
};
