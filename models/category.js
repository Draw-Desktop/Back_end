const {Sequelize} = require('sequelize');

module.exports = class Category extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                category_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                category_name: {
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
                modelName: 'Category',
                tableName: 'category',
                timestamps: true,
                paranoid: true,
            }
        );
    }
    static associate(db) {
        // Category 모델과 Post 모델 간의 일대다 관계 설정
        Category.hasMany(db.Post, { foreignKey: 'category_id' });
    }
};
