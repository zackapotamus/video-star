module.exports = function(sequelize, DataTypes) {
  var Video = sequelize.define("Video", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adult: DataTypes.BOOLEAN,
    backdrop_path: DataTypes.STRING,
    posterPath: DataTypes.STRING,
    tmdId: DataTypes.INTEGER,
    imdbId: DataTypes.INTEGER,
    originalTitle: DataTypes.STRING,
    overview: DataTypes.TEXT,
    popularity: DataTypes.FLOAT,
    releaseDate: DataTypes.DATE,
    runtime: DataTypes.INTEGER,
    isBorrowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    isLent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    tagline: DataTypes.STRING,
    title: DataTypes.STRING,
    voteAverage: DataTypes.FLOAT,
    voteCount: DataTypes.INTEGER,
    videoType: DataTypes.STRING(16),
    lendBorrowName: DataTypes.STRING,
    lendBorrowDate: DataTypes.DATE
  });

  Video.associate = function(models) {
    Video.belongsToMany(models.Genre, {
      through: models.VideoGenre,
      foreignKey: "videoId"
    });
  };
  return Video;
};
