import { useState } from 'react';

export default function CommentForm({ updateData }) {
  const [nComment, setNComment] = useState({
    name: '',
    comment: '',
  });

  return (
    <form
      className="commentForm"
      onSubmit={(e) => {
        e.preventDefault();
        if (nComment.name && nComment.comment) {
          document.querySelector('.commentForm').classList.remove('error');
          updateData(nComment);
          e.target.reset();
        } else {
          document.querySelector('.commentForm').classList.add('error');
        }
      }}
    >
      <h1>New Comment</h1>
      <input
        id="cName"
        type="text"
        placeholder="your name"
        onChange={(e) => {
          setNComment({
            ...nComment,
            name: e.target.value,
          });
        }}
      />
      <br />
      <input
        id="cComment"
        type="text"
        placeholder="comment"
        onChange={(e) => {
          setNComment({
            ...nComment,
            comment: e.target.value,
          });
        }}
      />
      <button id="cSubmit" type="submit">
        Add Comment
      </button>
    </form>
  );
}
