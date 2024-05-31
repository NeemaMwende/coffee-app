import About from './About';
import './App.css';
import Contact from './Contact';
import Home from './Home';
import Menu from './Menu';
import Navbar from './Navbar';
import Products from './Products';
import Reviews from './Reviews';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Products />
      <Reviews />
      <Contact />
    </div>
  );
}

export default App;
