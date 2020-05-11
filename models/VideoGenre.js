module.exports = (sequelize, DataTypes) => {
  const VideoGenre = sequelize.define("Video_Genre", {
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
  VideoGenre.associate = (models) => {
    VideoGenre.belongsTo(models.Video, {foreignKey: "video_id", targetKey: "id"});
    VideoGenre.belongsTo(models.Genre, {foreignKey: "genre_id", targetKey: "id"});
  };
  return VideoGenre;
};