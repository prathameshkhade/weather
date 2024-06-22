import './App.css';
import Current from './pages/Current';
import Hour from './pages/Hour';
import Navbar from './pages/Navbar'

function App() {
  return (
    <div>
      <section className="bg-blue-200 w-[100vw] h-[100vh]">
        <Navbar />
        <Current />
        <h1 className='text-xl font-bold px-7 mt-6 bottom-6'>Hourly:</h1>
        <Hour />
      </section>
    </div>
  );
}

export default App;
