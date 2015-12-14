const React = require('react');
const Counter = require('./Counter');
const Form = require('./Form');

const Main = React.createClass({
  render(){
    return(
      <div className="main">
        <Counter />
        <Form onSubmit={this.onSubmit}/>
      </div>
    );
  },

  onSubmit: function(input){
    console.log(input);
  }
});

module.exports = Main;
