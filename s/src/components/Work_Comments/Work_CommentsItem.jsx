export default function CommentsItem({ comment }) {
  return (
    <div className="commentItem">
      <h4>{comment.name}</h4>
      <p>{comment.comment}</p>
      <hr />
    </div>
  );
}
