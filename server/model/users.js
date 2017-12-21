var mongoose=require('mongoose')
var schema=mongoose.Schema;

var users=new schema({
  username:String,
  password:String
})
module.exports=mongoose.model('loginDetails',users);
