import React, { useState, useEffect } from "react";
import BotsPage from "./BotsPage";

function App() {
  const [botData, setBotData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((resp) => resp.json())
    .then(data => setBotData(data));
  }, []);
  console.log(botData)




  return (
    <div className="App">
      <BotsPage botData={botData} />
    </div>
  );
}

export default App;
