var mongoose = require("mongoose");
var OrderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    cart:{
        type:Object, required:true
    },
    date:{type: Date, default: Date.now}
});

module.exports = mongoose.model("Order",OrderSchema);
