const mongoose = require("../database");

//create an schema 

var userSchema = new mongoose.Schema({
            username: String,
            email: String,
            address: String,
            phone: String
});

var userModel = mongoose.model('users',userSchema);

module.exports = mongoose.model("Users",userModel);