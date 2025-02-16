import "./sheep.scss";

export default function Sheep({ avis, index, handleSheep }) {
  return (
    <div
      className={`${avis.style} moving-div`}
      key={avis.id}
      onClick={(_) => handleSheep(index)}
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
      <p>{avis.id}</p>
      <div className="ear left"></div>
      <div className="ear right"></div>
      <div className="leg left"></div>
      <div className="leg right"></div>
    </div>
  );
}
