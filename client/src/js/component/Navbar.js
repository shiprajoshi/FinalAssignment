//Navigation Bar
var React=require('React');
var {Link}=require('react-router')
var NavLink=require('./NavLink')

var Navbar=React.createClass({

  render:  function(){
    return(
      <div className="container-fluid" id="navbaar">
      <div className="row">
      <div className="col-md-12">
      <ul className="nav nav-pills">
      <li>
      <NavLink to="/home">Home</NavLink>
      </li>
      <li>
      <NavLink to="/moviebox">Movie Box</NavLink>
      </li>
      <li>
      <NavLink to="/favmovie" >Favourite Movie</NavLink>
      </li>
      <li>
      <NavLink to="/about/react" >About React</NavLink>
      </li>
      <li>
      <NavLink to="/about/mean">About Mean</NavLink>
      </li>
      <li className="pull-right">
      <a href="#">Log in</a>
      </li>
      </ul>
      </div>
      </div>
      </div>
    )
  }
})

module.exports=Navbar;
