const BreakGen = () => {

  const BreakTime = Math.round(Math.random() * 10);
    
  function removeResults() {
    document.getElementById("BreakGenerator").style.visibility = "hidden"
  };
  
  return ( 
    <div id="BreakGenerator">
      <p>Been through it { Math.round(Math.random() * 1000) } Times</p>
      <p>You Should Probably Take A {BreakTime} Minute Break</p>
      <button onClick={removeResults}>Remove</button>
    </div>
  );
};
 
export default BreakGen;