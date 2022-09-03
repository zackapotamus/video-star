module.exports = (sequelize, DataTypes) => {
  const VideoCast = sequelize.define("Video_Cast", {
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    },
    cast_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
  VideoCast.associate = (models) => {
    VideoCast.belongsTo(models.Video, {foreignKey: "video_id", targetKey: "id"});
    VideoCast.belongsTo(models.Cast, {foreignKey: "cast_id", targetKey: "id"});
  };
  return VideoCast;
};