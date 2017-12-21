//To Displays Seperate Movies in the List
var React=require('react')
var Gc=React.createClass({
  send: function(){
    console.log("i am coming in");
    $.ajax({
      url: "http://localhost:8085/movie/add",
      dataType: 'json',
      type:"POST",
      cache: false,
      data:this.props.allData,
      success: function()
      {
        console.log("yes");
        console.log("successfully sent");
      },
      error: function(xhr, status, err) {
        console.error("http://localhost:8085/movie/add", status, err.toString());
      }
    });
  },
  render: function(){
    return (
      <div>
      <div className="row">
      <div className="col-lg-6" id="left">
      <img src={this.props.allData.Poster}/>
      </div>
      <div className="col-lg-6" id="right">
      <h3>{this.props.allData.Title}</h3>
      <h3>{this.props.allData.Year}</h3>
      <h3>{this.props.allData.Type}</h3>
      <input type="button" value="Add Favoiurite Movie"  className="btn btn-primary btn-medium" onClick={this.send}/>
      </div>
      </div>
      </div>
    )
  }
});
module.exports=Gc;
