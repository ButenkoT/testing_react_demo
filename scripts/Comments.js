const React = require('react');

var Comments = React.createClass({

  propTypes: {
    comments: React.PropTypes.arrayOf(React.PropTypes.string)
  },

  render(){
    return (
      <ul>
        {this.props.comments.map((comment, index) =>
          <li key={index}>{comment}</li>)}
      </ul>
    )
  }
});

module.exports = Comments;
