import './App.css';
import Current from './pages/Current';
import Navbar from './pages/Navbar'

function App() {
  return (
    <div className="bg-amber-200 w-[100vw] h-[100vh]">
      <Navbar />
      <Current />
    </div>
  );
}

export default App;
