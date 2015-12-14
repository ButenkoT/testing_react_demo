const React = require('react');
const Counter = require('./Counter');
const Form = require('./Form');

const Main = React.createClass({
  render(){
    return (
      <div className="main">
        <Counter />
        <Form />
      </div>
    );
  }
});

module.exports = Main;
