import './App.css';
import Current from './pages/Current';
import Hour from './pages/Hour';
import Navbar from './pages/Navbar'

function App() {
  return (
    <div>
      <section className="bg-fuchsia-400 w-[100vw] h-[100vh]">
        <Navbar />
        <Current />
        <Hour />
      </section>
    </div>
  );
}

export default App;
