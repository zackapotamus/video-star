module.exports = (sequelize, DataTypes) => {
  const VideoReview = sequelize.define(
    "Video_Review",
    {
      video_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
      review_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );
  VideoReview.associate = (models) => {
    VideoReview.belongsTo(models.Video, {
      foreignKey: "video_id",
      targetKey: "id",
    });
    VideoReview.belongsTo(models.Review, {
      foreignKey: "review_id",
      targetKey: "id",
    });
  };
  return VideoReview;
};
