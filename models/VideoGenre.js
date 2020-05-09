module.exports = (sequelize, DataTypes) => {
  const VideoGenre = sequelize.define("VideoGenre", {
    videoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    },
    genreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    }
  });
  VideoGenre.associate = (models) => {
    VideoGenre.belongsTo(models.Video, {foreignKey: "videoId", targetKey: "id"});
    VideoGenre.belongsTo(models.Genre, {foreignKey: "genreId", targetKey: "id"});
  };
  return VideoGenre;
};