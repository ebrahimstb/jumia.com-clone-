import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
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
      <Footer />
    </div>
  );
}

export default App;
