import { useState, useEffect } from "react";
import * as C from "./constants";

export default function Edit(editData) {
  const [updatedData, setUpdatedData] = useState(C.defaultLegion);
  const handleUpdateData = (e) => {
    setUpdatedData((_) => ({
      ...updatedData,
      [e.target.name]: e.target.value,
    }));
    console.log(updatedData);
  };

  useEffect(
    (_) => {
      if (null === editData) {
        return;
      }
      setUpdatedData({
        name: editData.name,
        size: editData.editData.size,
        color_hex: editData.color_hex,
      });
    },
    [editData]
  );

  return (
    <div className="modal">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Legion Astartes</h5>
            <button className="btn-close"></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Legion name</label>
            </div>
            <div className="mb-3">
              <label className="form-label">
                Legion size: <b>{updatedData.size}</b> thousand
              </label>

              <input
                type="range"
                name="size"
                className="form-control"
                value={updatedData.size}
                onChange={handleUpdateData}
                min={10}
                max={500}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Legion color</label>
            </div>
            <div className="mb-3">
              <label className="form-label">Satellites</label>
            </div>
            <div className="modal-footer">
              <button type="button" className="blue">
                Close
              </button>
              <button type="button" className="green">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
