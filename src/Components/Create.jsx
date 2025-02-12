import { useState, useEffect } from "react";
import * as C from "./constants";

export default function Create() {
  const [legion, setLegion] = useState(C.defaultLegion);
  const [chapters, setChapters] = useState([]);

  const handleTitle = (e) => {
    setLegion((_) => ({ ...legion, [e.target.name]: e.target.value }));
  };
  const handleColor = (e) => {
    setLegion((_) => ({ ...legion, [e.target.name]: e.target.value }));
  };
  const handleSize = (e) => {
    setLegion((_) => ({ ...legion, [e.target.name]: e.target.value }));
  };
  const add = () => {
    setChapters((c) => ["", ...c]);
  };
  const removeChapter = (index) => {
    setChapters((c) => c.filter((_, i) => i !== index));
  };
  const handleChapters = (e, index) => {
    setChapters((c) =>
      c.map((chapter, i) => (i === index ? e.target.value : chapter))
    );
  };

  useEffect(() => {
    console.log(chapters);
  }, [chapters]);

  return (
    <div className="card my-5">
      <div className="card-header">
        <h4>Create a legion</h4>
      </div>
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Legion title:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleTitle}
            value={legion.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Legion color:</label>
          <input
            type="color"
            name="color_hex"
            className="form-control"
            onChange={handleColor}
            value={legion.color_hex}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Legion size: <b>{legion.size}</b> thousand
          </label>
          <input
            type="range"
            name="size"
            className="form-control"
            onChange={handleSize}
            value={legion.size}
            min={10}
            max={500}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Chapters</label>
          {chapters.map((chapter, index) => (
            <div key={index} className="form-add">
              <input
                type="text"
                name="chapter"
                className="form-Controls"
                onChange={(e) => handleChapters(e, index)}
                value={chapter}
              />
              <button className="purple" onClick={(_) => removeChapter(index)}>
                -
              </button>
            </div>
          ))}
          <button className="purple" onClick={add}>
            +
          </button>
        </div>

        <button className="green">Save</button>
      </div>
    </div>
  );
}
