const {Sequelize} = require('sequelize');

module.exports = class Notice extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                roleId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                title: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                content: {
                    type: Sequelize.STRING,
                    allowNull: true,
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
                modelName: 'Notice',
                tableName: 'notice',
                timestamps: true,
                paranoid: true,
            }
        );
    }
    static associate(db) {        
        // Notice 모델과 Image 모델 간의 일대다 관계 설정
        Notice.hasMany(db.Image, { foreignKey: 'contentId' });
    }
};