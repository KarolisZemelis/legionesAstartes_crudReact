import "./crud.scss";
import "./buttons.scss";
import axios from "axios";
import Create from "./Components/Create";
import List from "./Components/List";
import Edit from "./Components/Edit";
import { useState, useEffect } from "react";
import * as C from "./Components/constants";

export default function App() {
  const [legions, setLegions] = useState([]);

  const [storeData, setStoreData] = useState(null);
  const [editData, setEditData] = useState(null);

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

  useEffect((_) => {}, [editData]);

  return (
    <div className="App">
      <div className="container text-container">
        <div className="row">
          <div className="col-4">
            <Create setStoreData={setStoreData} />
          </div>
          <div className="col-8">
            <List legions={legions} setEditData={setEditData} />
            {editData !== null && <Edit editData={editData} />}
            {/* <Edit editData={editData} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
