const Category = require('../../models/category');
const Post = require('../../models/post');


exports.getAllCategories = async () => {
    const categories = await Category.findAll();

    const EX_categories = await Promise.all(categories.map(async (category) => {
        const post = await Post.findAll({
            where: {
                category_id: category.category_id
            }
        });

        // const recent = await Post.findAll({
        //     where: {
        //         category_id: category.category_id

        //     }
        // });

        category.dataValues.post = post;
        category.dataValues.count = post.length;
        return category;
    }));

    // EX_POST_LIKE를 post.like 기준으로 내림차순으로 정렬
    EX_categories.sort((a, b) => b.dataValues.count - a.dataValues.count);

    if (EX_categories === null) return false;
    else return EX_categories;
};