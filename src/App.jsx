import HomePage from "./Pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full">
      <div className="w-full fixed ">
        <Navbar />
      </div>

      <div className="w-full pt-[70px] bg-slate-50 ">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
