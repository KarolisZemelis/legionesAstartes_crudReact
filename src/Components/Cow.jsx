import "./cow.scss";

export default function Cow({ animal, handleClick }) {
  return (
    <div
      className={`${animal.style} moving-div`}
      key={animal.id}
      onClick={(_) => handleClick(animal.id)}
    >
      <div className="head">
        <div className="eye left">
          <div className="pupil"></div>
        </div>
        <div className="eye right">
          <div className="pupil"></div>
        </div>
        <div className="nose"></div>
      </div>

      <p>{animal.id}</p>
      <div className="ear left"></div>
      <div className="ear right"></div>
      <div className="leg left"></div>
      <div className="leg right"></div>
    </div>
  );
}
