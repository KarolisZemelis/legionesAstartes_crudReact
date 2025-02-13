import "./crud.scss";
import "./buttons.scss";
import axios from "axios";
import Create from "./Components/Create";
import List from "./Components/List";
import { useState, useEffect } from "react";
import * as C from "./Components/constants";

export default function App() {
  const [legions, setLegions] = useState([]);

  const [storeData, setStoreData] = useState(null);
  const [dataReceived, setDataReceived] = useState(null);

  useEffect((_) => {
    axios
      .get(C.serverUrl)
      .then((res) => {
        console.log("gaunu response:", res.data);
        setLegions(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(
    (_) => {
      if (storeData === null) {
        return;
      }
      console.log("storeData", storeData);
      axios
        .post(C.serverUrl, storeData)
        .then((res) => {})
        .catch((error) => {
          console.error(error);
        });
    },
    [storeData]
  );

  return (
    <div className="App">
      <header className="App-header">
        <div className="container text-container">
          <div className="row">
            <div className="col-4">
              <Create setStoreData={setStoreData} />
            </div>
            <div className="col-8">
              <List legions={legions} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
