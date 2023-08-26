import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [allSushi, setAllSushi] = useState([]);
  const [moneyRemaining, setMoneyRemaining] = useState(100);
  const [emptyPlates, setEmptyPlates] = useState([]);

  function handleBoughtSushi(num) {
    const newValue = moneyRemaining - num;
    setMoneyRemaining(newValue)
    setEmptyPlates([...emptyPlates, newValue])
  }

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setAllSushi(data))
  }, [])

  return (
    <div className="app">
      <SushiContainer moneyRemaining={moneyRemaining} handleBoughtSushi={handleBoughtSushi} allSushi={allSushi} />
      <Table plates={emptyPlates} money={moneyRemaining} />
    </div>
  );
}

export default App;
