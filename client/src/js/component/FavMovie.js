//Component For displaying Favourite Movies(making ajax calls). GcFavMovie is its child component
var React=require('react')
var GcFavMovie=require('./GcFavMovie');

var FavMovie=React.createClass({
  getInitialState: function(){
    return({mydata: []})
  },

  //Ajax call for display
  componentWillMount: function(){
    console.log("i am coming in");
    $.ajax({
      url: "http://localhost:8085/movie/display",
      dataType: 'json',
      type:"GET",
      async: true,
      cache: false,
      success: function(data)
      {
        this.setState({mydata : data});
        console.log(data);
      }  .bind(this),
      error: function(xhr, status, err) {
        console.error("http://localhost:8085/movie/display", status, err.toString());
      }.bind(this)
    });
  },

  //ajax call for delete
  changeState:function(id){
    console.log(id);
    $.ajax({
      url: "http://localhost:8085/movie/delete/"+id,
      type:"DELETE",
      cache: false,
      success: function(d)
      {
        console.log("inside delete ajax");
        this.setState({mydata:d});
        //this.props.changeState(this.props.imdbID);
      }  .bind(this),
      error: function(xhr, status, err) {
        console.error("http://localhost:8085/movie/delete/", status, err.toString());
      }.bind(this)
    });

  },

  //ajax call for updation
  onUpdate:function(id,title){
    console.log("update");
    //alert("http://localhost:8085/movie/update/"+id+"/"+title);
    $.ajax({
      url: "http://localhost:8085/movie/update/"+id+"/"+title,
      type:"PUT",
      cache: false,
      success: function(d)
      {
        this.setState({mydata:d});
        console.log("inside put ajax");
      }  .bind(this),
      error: function(xhr, status, err) {
        console.error("http://localhost:8085/movie/update/", status, err.toString());
      }.bind(this)
    });
  },

  //to render the compnent
  render:function(){
    var movieList = this.state.mydata.map(function(arr) {
      return (
        <div>
        <GcFavMovie allData={arr} imdbID={arr.imdbID} Poster={arr.Poster} Title={arr.Title} Year={arr.Year} Type={arr.Type} changeState={this.changeState} onUpdate={this.onUpdate}/>
        </div>
      );
    }.bind(this));
    return (
      <div className="movieL">
      {movieList}
      </div>
    );}
  });
module.exports=FavMovie;
