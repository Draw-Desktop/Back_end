const mypagesService = require("./mypagesService.js");
const user = require('../../models/user.js');

exports.getdontchangenicknameDTO = async function (user_info) {
    const past_nickname = await user.findOne({
        where: {user_id: user_info[0]},
        attributes: ['nickname']
    });
    
    if (past_nickname === null) return false;
    else return past_nickname.dataValues.nickname;
};