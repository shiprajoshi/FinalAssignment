var React=require('react')

var About=React.createClass({

  render: function(){
    return (
      <div>
      <div>
      <h3> I am {this.props.params.id}</h3>
      </div>
      </div>
    )
  }
});
module.exports=About;
