module.exports = (sequelize, DataTypes) => {
  const VideoCrew = sequelize.define("Video_Crew", {
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    },
    crew_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });
  VideoCrew.associate = (models) => {
    VideoCrew.belongsTo(models.Video, {foreignKey: "video_id", targetKey: "id"});
    VideoCrew.belongsTo(models.Crew, {foreignKey: "crew_id", targetKey: "id"});
  };
  return VideoCrew;
};