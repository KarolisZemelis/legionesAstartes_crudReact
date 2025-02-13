export default function List({ legions, setEditData }) {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {legions.length === 0 ? (
          <li>Loading...</li>
        ) : (
          legions.map((legion) => (
            <li key={legion.id} className="list-group-item">
              <div className="row">
                <div className="col-2">
                  <b>{legion.name}</b>
                </div>
                <div className="col-2">{legion.size} thousand</div>
                <div
                  className="col-2 legion-color"
                  style={{ backgroundColor: legion.color_hex }}
                ></div>
                <ul className="list-group list-group-flush col-3 chapters">
                  Chapters:
                  {JSON.parse(legion.chapters).map((chapter, i) => (
                    <li key={i} className="list-group-item">
                      {chapter}
                    </li>
                  ))}
                </ul>
                <div className="col-2">
                  <button
                    className="green"
                    onClick={(_) => setEditData(legion)}
                  >
                    Edit
                  </button>
                  <button className="red">Delete</button>
                </div>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
