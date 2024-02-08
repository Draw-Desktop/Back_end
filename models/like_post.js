const {Sequelize} = require('sequelize');

module.exports = class LikePost extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                like_post_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                post_id: {
                    type: Sequelize.INTEGER,
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
                modelName: 'LikePost',
                tableName: 'like_post',
                timestamps: true,
                paranoid: true,
            }
        );
    }
    static associate(db) {
        // LikePost 모델과 User 모델 간의 다대일 관계 설정
        LikePost.belongsTo(db.User, { foreignKey: 'user_id' });

        // LikePost 모델과 Post 모델 간의 다대일 관계 설정
        LikePost.belongsTo(db.Post, { foreignKey: 'post_id' });
    }
};
