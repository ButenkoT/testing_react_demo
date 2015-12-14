const React = require('react');

var List = React.createClass({

  propTypes: {
    comments: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  render(){
    return (
      <ul>
        {
          this.props.comments.map(function(comment, index) {
            return <li key={index}>{comment}</li>
          })
        }
      </ul>
    )
  }
});

module.exports = List;
