import './Variables/Variables.scss'
import Navbar from './Components/Navbar/Navbar';
import Features from './Components/Features/Features';
import GraphData from './Components/GraphData/graphData';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Features/>
      <GraphData/>
    </div>
  );
}

export default App;
