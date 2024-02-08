const {Sequelize} = require('sequelize');

module.exports = class Tag extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                Tag_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                post_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                tagging: {
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
                modelName: 'Tag',
                tableName: 'tag',
                timestamps: true,
                paranoid: true,
            }
        );
    }
    static associate(db) {
        // Tag 모델과 Post 모델 간의 다대일 관계 설정
        Tag.belongsTo(db.Post, { foreignKey: 'post_id' });
    }
};
