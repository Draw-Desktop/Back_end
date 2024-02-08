const {Sequelize} = require('sequelize');

module.exports = class Link extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                link_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                },
                post_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                link_url: {
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
                modelName: 'Link',
                tableName: 'link',
                timestamps: true,
                paranoid: true,
            }
        );
    }
    static associate(db) {
        // Link 모델과 Post 모델 간의 다대일 관계 설정
        Link.belongsTo(db.Post, { foreignKey: 'post_id' });
    }
};
