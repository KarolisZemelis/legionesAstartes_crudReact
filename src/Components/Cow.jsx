import "./cow.scss";

export default function Cow({ karve, index, handleCow }) {
  return (
    <div
      className={`${karve.style} moving-div`}
      key={karve.id}
      onClick={(_) => handleCow(index)}
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

      <p>{karve.id}</p>
      <div className="ear left"></div>
      <div className="ear right"></div>
      <div className="leg left"></div>
      <div className="leg right"></div>
    </div>
  );
}
