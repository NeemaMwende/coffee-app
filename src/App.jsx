import About from './About';
import './App.css';
import Home from './Home';
import Menu from './Menu';
import Navbar from './Navbar';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
    </div>
  );
}

export default App;
