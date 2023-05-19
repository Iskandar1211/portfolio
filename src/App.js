import './App.css';
import { AboutMe } from './components/AboutMe';
import { Footter } from './components/Footter';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <AboutMe />
      <Projects/>
      <Footter/>
    </div>
  );
}

export default App;
