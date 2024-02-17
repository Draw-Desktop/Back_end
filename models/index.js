const Sequelize = require('sequelize');
const env = process.env.NODE_ENV  || 'development';
const config = require('../config/config.js')[env];

const User = require('./user.js');
const Post = require('./post.js');
const LikePost = require('./like_post.js');
const Link = require('./link.js');
const Tag = require('./tag.js');
const Category = require('./category.js');
const Help = require('./help.js');


const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.User = User;
db.Post = Post;
db.LikePost = LikePost;
db.Link = Link;
db.Tag = Tag;
db.Category = Category;
db.Help = Help;

User.init(sequelize);
Post.init(sequelize);
LikePost.init(sequelize);
Link.init(sequelize);
Tag.init(sequelize);
Category.init(sequelize);
Help.init(sequelize);

User.associate(db);
Post.associate(db);
LikePost.associate(db);
Link.associate(db);
Tag.associate(db);
Category.associate(db);
Help.associate(db);

// export default db;
module.exports = db
