import "./App.css";
import BeerList from "./BeerList";
import Beer from "./Beer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BeerContext from "./BeerContext";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [beers, setBeers] = useState([]);

  console.log(beers);

  const fetchBeers = () => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => response.data)
      .then((data) => setBeers(data));
  };
  useEffect(() => {
    fetchBeers();
  }, []);
  return (
    <BeerContext.Provider value={{ beers: beers, setBeers: setBeers }}>
      <Router>
        <Routes>
          <Route path="/" element={<BeerList />} />
          <Route path="/beer/:beerId" element={<Beer />} />
        </Routes>
      </Router>
    </BeerContext.Provider>
  );
}

export default App;
