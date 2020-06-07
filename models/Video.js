module.exports = function(sequelize, DataTypes) {
  var Video = sequelize.define("Video", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adult: DataTypes.BOOLEAN,
    backdrop_path: DataTypes.STRING,
    budget: DataTypes.INTEGER,
    homepage: DataTypes.STRING,
    poster_path: DataTypes.STRING,
    tmd_id: DataTypes.INTEGER,
    imdb_id: DataTypes.STRING,
    original_language: DataTypes.STRING,
    original_title: DataTypes.STRING,
    overview: DataTypes.TEXT,
    popularity: DataTypes.FLOAT,
    production_companies: DataTypes.STRING,
    production_countries: DataTypes.STRING,
    release_date: DataTypes.DATE,
    runtime: DataTypes.INTEGER,
    spoken_languages: DataTypes.STRING,
    status: DataTypes.STRING,
    is_borrowed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_lent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tagline: DataTypes.STRING,
    title: DataTypes.STRING,
    vote_average: DataTypes.FLOAT,
    vote_count: DataTypes.INTEGER,
    video_type: {
      type: DataTypes.STRING(16),
      allowNull: false,
      validate: {
        isIn: [['Blu-ray', 'DVD', 'Digital']],
      }
    },
    lend_borrow_name: DataTypes.STRING,
    lend_borrow_date: DataTypes.DATE,
    lend_borrow_due_date: DataTypes.DATE,
  }, {
    underscored: true,
    freezeTableName: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Video.associate = function(models) {
    Video.belongsToMany(models.Genre, {
      through: models.Video_Genre,
      foreignKey: "video_id",
      as: 'genres'
    });
    Video.belongsToMany(models.Cast, {
      through: models.Video_Cast,
      foreignKey: "video_id",
      as: 'cast'
    });
    Video.belongsToMany(models.Crew, {
      through: models.Video_Crew,
      foreignKey: "video_id",
      as: 'crew'
    });
    Video.belongsToMany(models.Crew, {
      through: models.Video_Crew,
      foreignKey: "video_id",
      as: 'directors'
    });
    Video.belongsToMany(models.Genre, {
      through: models.Video_Genre,
      foreignKey: "video_id",
      as: 'filter_genres'
    });
  };
  return Video;
};
