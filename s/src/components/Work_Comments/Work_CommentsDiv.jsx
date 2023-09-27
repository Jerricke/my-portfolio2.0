import { useState } from 'react';
import CommentsItem from './Work_CommentsItem';
import './Work_Comments.css';
import CommentForm from './Work_CommentForm';

export default function CommentsDiv({ data, set }) {
  const [cData, setCData] = useState(data);

  function updateData(newComment) {
    fetch(`/api/${set}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newComment),
    })
      .then((r) => r.json())
      .then((data) => setCData([...cData, data]))
      .catch((e) => console.log(e));
  }

  return (
    <div className="commentSection">
      <h2>Comments:</h2>
      {cData.map((comment) => (
        <CommentsItem key={comment.id} comment={comment} />
      ))}
      <CommentForm updateData={updateData} />
    </div>
  );
}
