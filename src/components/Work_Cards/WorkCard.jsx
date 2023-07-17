import placeholder from '../../assets/test.jpeg';

export default function WorkCard({ title = 'title', img = placeholder }) {
  return (
    <div className="WorkLayout__card">
      <h1>{title}</h1>
      <div className="card">
        <img src={img} alt="projImg" />
        <div className="overlay">
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
