const Category = require('../../models/category');
const Post = require('../../models/post');
const { Op } = require('sequelize');

exports.getAllCategories = async () => {
    const d = new Date();
    const year = d.getFullYear(); // 년
    const month = d.getMonth();   // 월
    const day = d.getDate();
    const seven = new Date(year, month, day - 7);

    const categories = await Category.findAll();


    const EX_categories = await Promise.all(categories.map(async (category) => {
        const post = await Post.findAll({
            where: {
                category_id: category.category_id
            }
        });

        const recent = await Post.count({
            where: {
                [Op.and]: [
                    {category_id: category.category_id}, 
                    {createdAt: {[Op.gte]: seven}}
                ]                
            }
        });

        category.dataValues.post = post;
        category.dataValues.count = post.length;
        category.dataValues.recent = recent;
        return category;
    }));

    if (EX_categories === null) return false;
    else return EX_categories;
};