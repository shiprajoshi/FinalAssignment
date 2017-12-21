//component that renders different fav. movie components.
var React=require('react')
var GcFavMovie=React.createClass({

  getInitialState: function(){
    return ({allData:this.props.allData ,id:"#"+ this.props.allData.imdbID});
  },

  DeleteMovie: function(){
    console.log("inside delete");
    this.props.changeState(this.props.imdbID);
  },

  updateMovie: function(){
    console.log("inside Update");
    this.props.onUpdate(this.state.allData.imdbID,this.state.allData.Title);
  },

  titleChange: function(e){
    console.log("inside change");
    this.state.allData.Title=e.target.value;
  },

  render: function(){
    return (
      <div>
      <div className="row">
      <div className="col-lg-6" id="left">
      <img src={this.props.allData.Poster}/>
      </div>
      <div className="col-lg-6" id="right">
      <h3>{this.props.Title}</h3>
      <h3>{this.props.Year}</h3>
      <h3>{this.props.Type}</h3>
      <input type="button" value="Delete Movie"  className="btn btn-primary btn-medium" onClick={this.DeleteMovie}/>
      <input type="button" value="Update Movie"  className="btn btn-primary btn-medium" data-toggle="modal" data-target={this.state.id}/>
      </div>
      </div>
      <div id={this.props.imdbID} className="modal fade" tabindex="-1" role="dialog">
      <div className="modal-dialog" role="document">
      <div className="modal-content">
      <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h4 className="modal-title">Update Movie</h4>
      </div>
      <div className="modal-body">

      <p><small>Update the required Field.</small></p>

      <form className="form-horizontal">
      <div className="form-group" >
      <label className="col-lg-4 control-label" for="inputName">Movie Name</label>
      <div className="col-lg-8">
      <input className="form-control" id="inputName" placeholder={this.props.Title} type="text" onChange={this.titleChange}/>
      </div>
      </div>
      </form>

      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-default" data-dismiss="modal" >Close</button>
      <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.updateMovie}>Save changes</button>
      </div>
      </div>
      </div>
      </div>
      </div>

    )
  }
});
module.exports=GcFavMovie;
