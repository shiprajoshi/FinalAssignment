var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing /movie/add", function(err){
  it("should respond", function(done){
    url
    .post("/movie/add")
    .expect(200)
    .send({
      "Title":"Hello, Dolly!",
      "Year" :"1969",
      "imdbID":"tt0064418",
      "Type":"movie",
      "Poster":"http://ia.media-imdb.com/images/M/MV5BMTE5OTc3MDQxNl5BMl5BanBnXkFtZTcwNTg2MTAwMQ@@._V1_SX300.jpg"
    })
    .end(function(err,res){
      res.text.should.be.equal("Movie inserted");
      done();
    });

  });
});

describe("Testing /movie/display ", function(err){
  it("should respond", function(done){
    url
    .get("/movie/display")
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
      var myObj = JSON.parse(res.text);
      console.log(myObj);
      myObj[0].Title.should.be.equal("hell");
      done();
    });

  });
});
describe("Testing /movie/update", function(err){
  it("should resopnd", function(done){
    url
    .put("/movie/update/:tt0064418/:hell")
    .expect(200)
    .send({
      "Title":"Hello, Dolly!",
      "Year" :"1969",
      "imdbID":"tt0064418",
      "Type":"movie",
      "Poster":"http://ia.media-imdb.com/images/M/MV5BMTE5OTc3MDQxNl5BMl5BanBnXkFtZTcwNTg2MTAwMQ@@._V1_SX300.jpg"
          })
    .end(function(err,res){
      should.not.exist(err);
       var myObj = JSON.parse(res.text);
       myObj[0].Title.should.be.equal("hell");
       done();
    });
  });
});

describe("Testing /movie/delete", function(err){
  it("should resopnd", function(done){
    url
    .delete("/movie/delete/:tt0064418")
    .expect(200)
    .end(function(err,res){
      should.not.exist(err);
       var myObj = JSON.parse(res.text);
       myObj[0].Title.should.be.equal("hell");
       done();
    });
  });
});
