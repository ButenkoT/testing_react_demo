const React = require('react');

const Header = React.createClass({
  render(){
    return (
      <header>
        <h1>Hello {this.props.name}</h1>
      </header>
    );
  }
});

module.exports = Header;
