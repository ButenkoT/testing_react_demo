const React = require('react');
const Header = require('./Header');
const Main = require('./Main');
const Footer = require('./Footer');


const Hello = React.createClass({
  render(){
    return(
      <div>
        <Header name="SydJS" />
        <Main />
        <Footer />
      </div>
    );
  }
});

module.exports = Hello;
