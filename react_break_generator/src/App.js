import './App.css';
import Icons from './styles/Icons';
import BreakBtn from './BreakBtn';
import BreakGen from './BreakGen';

function App() {

  const title = 'Take A Break Generator';
  const link = "http://localhost:3000/"

  return (
      <div className="content">     
        <BreakBtn/>
        <h1>{title}</h1>
        <Icons />        
        <BreakGen />
        <a href={link}>Restart</a>
      </div>
  );
}

export default App;