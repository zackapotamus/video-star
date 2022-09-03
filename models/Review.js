module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    review: DataTypes.TEXT,
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true
  });

  Review.associate = function(models) {
    Review.belongsToMany(models.Video, {
      through: models.Video_Review,
      foreignKey: "review_id"
    });
  };
  return Review;
};
