//更新database的位置?
const mongoose = require("../database");

//create an schema 
//表中type有待验证
var userSchema = new mongoose.Schema({
            username: String,
            email: String,
            address: String,
            phone: String
});

var userModel = mongoose.model('users',userSchema);
module.exports = mongoose.model("Users",userModel);