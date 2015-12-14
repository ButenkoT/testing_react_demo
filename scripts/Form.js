const React = require('react');
const Comments = require('./Comments');

const Form = React.createClass({

  getInitialState() {
    return {
      comment: '',
      comments: ['hello', 'world']
    };
  },

  onChange(event) {
    this.setState({
      comment: event.target.value
    });
  },

  sendComment(event) {
    event.preventDefault();

    const {comments, comment} = this.state;

    this.setState({
      comment: '',
      comments: comments.concat(comment)
    });

  },

  render() {
    const {comments, comment} = this.state;

    return (
      <div className="myForm">
        <form onSubmit={this.sendComment}>
          <input
            value={comment}
            type="text"
            placeholder="Your comment"
            onChange={this.onChange}
            autoFocus={true}
          />

          <button type="submit">Submit</button>
        </form>

        <Comments comments={comments}/>
      </div>
    );
  }
});

module.exports = Form;
