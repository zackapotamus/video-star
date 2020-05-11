module.exports = function(sequelize, DataTypes) {
  var Genre = sequelize.define("Genre", {
    // Giving the Author model a name of type STRING
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });

  Genre.associate = function(models) {
    Genre.belongsToMany(models.Video, {
      through: models.Video_Genre,
      foreignKey: "genre_id"
    });
  };
  return Genre;
};
