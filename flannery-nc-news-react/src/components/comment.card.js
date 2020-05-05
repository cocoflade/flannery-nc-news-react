import React from "react";

class CommentCard extends React.Component {
  state = {
    name: "jessjelly",
  };

  deleteComment = (index) => {
    // this.setState((currState) => {
    //   const copyArr = [...currState.to_do];
    //   copyArr.splice(index, 1);
    //   return { to_do: copyArr };
    // });
    // THIS WANTS TO BE IN COMMENTS TO HAVE ACCESSS TO STATE
  };

  render() {
    const { comment } = this.props;

    return (
      <li className="comment">
        <p>Author: {comment.author}</p>
        <p>ID: {comment.article_id}</p>
        <p>Comment ID: {comment.comment_id}</p>
        <p>Votes: {comment.votes}</p>
        <p>Body: {comment.body}</p>
        <p>Created at: {comment.created_at}</p>
        {comment.author === "jessjelly" ? (
          <section>
            <button onClick={this.deleteComment}>delete comment</button>
          </section>
        ) : null}
      </li>
    );
  }
}

export default CommentCard;

// {this.state.name === "jessjelly" ? (
//   <section>
// <button onClick={this.deleteComment}>hello</button>

//   </section>
// ) : null}

// function CommentCard({ comment }) {
//   return (
//     <li>
//       <main className="comment">
//         <p>Author: {comment.author}</p>
//         <p>ID: {comment.article_id}</p>
//         <p>Comment ID: {comment.comment_id}</p>
//         <p>Votes: {comment.votes}</p>
//         <p>Body: {comment.body}</p>
//         <p>Created at: {comment.created_at}</p>
//       </main>
//     </li>
//   );
// }
