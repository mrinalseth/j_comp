var mongoose = require("mongoose");
var passportLocatMongoose=require("passport-local-mongoose");

var userSchema = mongoose.Schema({
    email:{type:String,required:true},
    username:{type:String,required:true},
    password:String,
    address:{
        country:String,
        state:String,
        city:String,
        pin:String,
        landmark:String,
        apparmentName:String,
        flatNo:String
    },
    mobileNumber:{type:String,required:true},
});


userSchema.plugin(passportLocatMongoose);
module.exports = mongoose.model("User",userSchema);