import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Index from "./components/Index";

function App() {
  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div className="App">
      <Navbar />
      
      <Index />
    </div>
  );
}

export default App;
