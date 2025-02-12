import "./crud.scss";
import "./buttons.scss";

import Create from "./Components/Create";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container text-container">
          <div className="row">
            <div className="col-4">
              <Create />
            </div>
            <div className="col-8">List</div>
          </div>
        </div>
      </header>
    </div>
  );
}
