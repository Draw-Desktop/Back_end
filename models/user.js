const {Sequelize} = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                login_id: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                password: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                introduction: {
                    type: Sequelize.STRING,
                    allowNull: true,
                },
                profile_img: {
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
                modelName: 'User',
                tableName: 'user',
                timestamps: true,
                paranoid: true,
            }
        );
    }
    static associate(db) {
        // User 모델과 LikePost 모델 간의 일대다 관계 설정
        User.hasMany(db.LikePost, { foreignKey: 'userId' });

        // User 모델과 Post 모델 간의 일대다 관계 설정
        User.hasMany(db.Post, { foreignKey: 'userId' });
    }
};
