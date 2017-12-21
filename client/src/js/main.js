var React= require('react');
var ReactDOM=require('react-dom');
var Home= require('./component/Home')
var Navbar=require('./component/Navbar')
var MovieBox=require('./component/MovieBox')
var About=require('./component/About')
var FavMovie=require('./component/FavMovie')

var {hashHistory,Route, Router, IndexRoute}=require('react-router')

var MainComponent=React.createClass({

  render: function() {
    return (
      <div>
      <Navbar/>
      {this.props.children}
      </div>
    )
  }

})

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainComponent}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/moviebox" component={MovieBox}/>
      <Route path="/favmovie" component={FavMovie}/>
      <Route path="/about/:id" component={About}/>
    </Route>
  </Router>,document.getElementById('content')
);
