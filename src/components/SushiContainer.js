import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({moneyRemaining, allSushi, handleBoughtSushi}) {

  const [iterator, setIterator] = useState(0);

  function handleMore() {
    const newIterator = iterator + 4;
    setIterator(newIterator)
  }

  

  const sushi = allSushi.slice(iterator, iterator + 4).map(sushi => {
    return <Sushi moneyRemaining={moneyRemaining} handleBoughtSushi={handleBoughtSushi} key={sushi.id} image={sushi.img_url} name={sushi.name} price={sushi.price} id={sushi.id} />
  })

  return (
    <div className="belt">
      {sushi}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
