import HomePage from "./Pages/HomePage";
import Footer from "./components/Footer";
import Jastip from "./components/Jastip";
import Navbar from "./components/Navbar";
import Products from "./Pages/Products";

function App() {
  return (
    <div className="w-full">
      <div className="w-full fixed z-10">
        <Navbar />
      </div>

      <div className="w-full pt-[70px]">
        <HomePage />
      </div>
      <div className="w-full">
        <Products />
      </div>
      <div className="w-full">
        <Jastip />
      </div>
      <div className="w-full h-[50px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
