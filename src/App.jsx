import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full">
      <div className="w-full fixed ">
        <Navbar />
      </div>

      <div className="w-full pt-[70px]">
        <HomePage />
      </div>
      <div className="w-full h-[50px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
