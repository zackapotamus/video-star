module.exports = function(sequelize, DataTypes) {
  var Crew = sequelize.define("Crew", {
    id: { // person_id
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    credit_id: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    job: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profile_path: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    underscored: true,
    freezeTableName: true
  });

  Crew.associate = function(models) {
    Crew.belongsToMany(models.Video, {
      through: models.Video_Crew,
      foreignKey: "crew_id"
    });
  };
  return Crew;
};
