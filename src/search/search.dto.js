const Post = require('../../models/post.js');
const Category = require('../../models/category.js');
const User = require('../../models/user.js');
const { Op } = require('sequelize');

exports.searchTitleResponseDTO = async (title) => {
    const EX_POST = await Post.findAll({
        where:{
            title: {
                [Op.like]: "%" + title + "%"
            }
        }
    });

    if (EX_POST === null) return false;
    else return EX_POST;
};

exports.searchCategoryResponseDTO = async (categoryName) => {
    const EX_CATEGORY = await Category.findAll({
        where:{
            category_name: {
                [Op.like]: "%" + categoryName + "%"
            }
        }
    });

    const EX_POST = await Promise.all(EX_CATEGORY.map(async (category) => {
        const post = await Post.findAll({
            where: {
                category_id: category.category_id
            },
            include: [
                {
                    model: Category,
                    attributes: ['category_id', 'category_name'],
                },
            ],
        });

        return post;
    }));

    if (EX_POST === null) return false;
    else return EX_POST;
};

exports.searchUserResponseDTO = async (nickname) => {
    const EX_USER = await User.findAll({
        where:{
            nickname: {
                [Op.like]: "%" + nickname + "%"
            }
        }
    });

    const EX_POST = await Promise.all(EX_USER.map(async (user) => {
        const post = await Post.findAll({
            where: {
                user_id: user.user_id
            },
            include: [
                {
                    model: User,
                    attributes: ['user_id', 'nickname'],
                },
            ],
        });

        return post;
    }));

    if (EX_POST === null) return false;
    else return EX_POST;
};