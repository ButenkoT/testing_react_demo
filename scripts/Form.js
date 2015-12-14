const React = require('react');
const List = require('./List');

let comments = ['hello', 'world'];

const Form = React.createClass({

  getInitialState() {
    return {comment: ''};
  },

  onChange(event) {
    this.setState({comment: event.target.value});
  },

  sendComment(event) {
    event.preventDefault();
    comments.push(this.state.comment);
    this.setState({comment: event.target.value});
    console.log(comments);
  },

  render() {
    return (
      <div className="myForm">
        <form onSubmit={this.sendComment}>
          <input
            value={this.state.comment}
            type="text"
            placeholder="Your comment"
            onChange={this.onChange}
            autoFocus={true}
          />

          <button type="submit" value="Post">Submit</button>
        </form>

        <List comments={comments}/>
      </div>
    );
  }
});

module.exports = Form;
