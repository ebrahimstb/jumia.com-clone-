import './App.css';
import Banner from './components/banner';
import Contents from './components/home';
import Navbar from './components/navbar';
import Row from './components/row';

function App() {
  return (
    <div className="App">
      < Banner />
      < Row />
      < Navbar />
      < Contents />
    </div>
  );
}

export default App;
