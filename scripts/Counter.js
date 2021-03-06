const React = require('react');

const Counter = React.createClass({
  incrementCount(){
    this.setState({
      count: this.state.count + 1
    });
  },

  getInitialState(){
    return {
      count: 0
    }
  },

  render: function () {
    return (
      <div className="counter">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
});

module.exports = Counter;
