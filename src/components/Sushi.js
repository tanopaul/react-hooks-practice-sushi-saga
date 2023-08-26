import React, { useState } from "react";

function Sushi({name, price, image, handleBoughtSushi, moneyRemaining}) {

  const [eaten, setEaten] = useState(false);
  
  function handleEatenSushi() {

    if (moneyRemaining < price) {
      alert("Insufficient Funds")
      return false;
    }

    setEaten(true);
    handleBoughtSushi(price)
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatenSushi}>
        
        {eaten ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
