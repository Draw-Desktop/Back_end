const Post = require('../../models/post.js');
const Category = require('../../models/category.js');

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

};