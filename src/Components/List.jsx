import { useState, useEffect } from "react";

export default function List({ legions }) {
  const [dataReceived, setDataReceived] = useState(null);
  console.log("esu liste", legions);
  return (
    <div className="card" style={{ width: "18rem" }}>
      <ul className="list-group list-group-flush">
        {legions.length === 0 ? (
          <li>Loading...</li>
        ) : (
          legions.map((legion) => (
            <>
              <li key={legion.id}>{legion.name}</li>
              <li key={legion.id}>{legion.size}</li>
              <li key={legion.id}>{legion.color_hex}</li>
              <div>
                {JSON.parse(legion.chapters).map((chapter, i) => (
                  <p key={i}>{chapter}</p>
                ))}
              </div>
            </>
          ))
        )}
      </ul>
    </div>
  );
}
