import About from './About';
import './App.css';
import Home from './Home';
import Menu from './Menu';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
    </div>
  );
}

export default App;
