var mongoose=require('mongoose')
var schema=mongoose.Schema;

var users=new schema({
  Title: String,
   Year: String,
   imdbID: String,
   Type: String,
   Poster: String,
})
module.exports=mongoose.model('MovieDetails',users);
