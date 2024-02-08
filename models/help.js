const {Sequelize} = require('sequelize');

module.exports = class Help extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                help_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                reason: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                detail: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                createdAt: {
                    type: Sequelize.DATE,
                    allowNull: true,
                },
                updatedAt: {
                    type: Sequelize.DATE,
                    allowNull: true,
                },
                deletedAt: {
                    type: Sequelize.DATE,
                    allowNull: true,
                },
            },
            {
                sequelize,
                modelName: 'Help',
                tableName: 'help',
                timestamps: true,
                paranoid: true,
            }
        );
    }
    static associate(db) {}
};
