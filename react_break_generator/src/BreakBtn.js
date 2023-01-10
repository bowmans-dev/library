import { useState } from "react";

const BreakState = () => {

  const [Break, setBreak] = useState('Still working ???');

  const hideTakeBreakBtn = () => {
    setBreak('Taking a break..');
    document.getElementById("breakBtn").style.visibility = "hidden"
  }

  return ( 
    <div>
      <p>{Break}</p>
      <button id="breakBtn" onClick={hideTakeBreakBtn}>Take the break</button>
    </div>      
  );
}

export default BreakState;