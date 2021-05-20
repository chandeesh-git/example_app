'use strict'

module.exports = (sequelize,DataTypes) => {
    var project = sequelize.define('project', {
        project_name: DataTypes.STRING,
        project_enabled: DataTypes.INTEGER,
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue:true
        }
    })
    return project;
}