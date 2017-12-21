var express=require('express')
var mongoose=require('mongoose')
var movieObj=require('../model/movie');
var app=express();


var loggerTest=function(req,res,next){
  movieObj.find(function(err,data){
    if(err)
    res.send(err);
    else
    {
      console.log("successfull middleware");
      res.send(data);
    }
  });
}

app.post('/add',function(req,res){
  var movie =new movieObj(req.body);

  movie.save(function(err){
    if(err)
    {
      res.send(err);
    }
    else
    {
      res.send("Movie inserted");
    }
    //console.log("hello");
    //console.log(req.body);
  })
});

app.get('/display',function(req,res,next){
  //console.log("inside get");
  //var movie=mongoose.model("MovieDetails")
  movieObj.find({},function(err,data){
    if(err){
      res.send("error in get");
    }
    else {
      console.log("successfully displayed");
      res.json(data);
    }
  })
}
);


app.delete('/delete/:id',function(req,res,next){
  //console.log(req.params.id);
  //var movie=mongoose.model("MovieDetails");
  movieObj.findOneAndRemove({imdbID: req.params.id}, function (err,offer){
    if(err) { res.send(err);

      console.log(err);
     }
    else{
      // console.log("successfully deleted");
      //res.send("successfully deleted");
      next();
    }
  })
});

app.put('/update/:imdbID/:Title',function(req,res,next){

  movieObj.findOneAndUpdate({ imdbID: req.params.imdbID} , {Title: req.params.Title} , function (err,movies) {
    if (err) {res.send(err);}
    else{
        console.log("Update successful");
      //res.send("successfully updated");
      next();
    }
  });

});
app.use(loggerTest);

module.exports=app;
