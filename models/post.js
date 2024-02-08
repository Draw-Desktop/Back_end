const {Sequelize} = require('sequelize');

module.exports = class Post extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                post_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                img_url: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                category_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                title: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                explanation: {
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
                modelName: 'Post',
                tableName: 'post',
                timestamps: true,
                paranoid: true,
            }
        );
    }
    static associate(db) {
        // Post 모델과 User 모델 간의 다대일 관계 설정
        Post.belongsTo(db.User, { foreignKey: 'user_id' });
        
        // Post 모델과 Category 모델 간의 다대일 관계 설정
        Post.belongsTo(db.Category, { foreignKey: 'category_id' });

        // Post 모델과 LikePost 모델 간의 일대다 관계 설정
        Post.hasMany(db.LikePost, { foreignKey: 'userId' });
        
        // Post 모델과 Link 모델 간의 일대다 관계 설정
        Post.hasMany(db.Link, { foreignKey: 'post_id' });
        
        // Post 모델과 Tag 모델 간의 일대다 관계 설정
        Post.hasMany(db.Tag, { foreignKey: 'post_id' });
    }
};
