import { useContext } from "react";
import { Link } from "react-router-dom";
import BeerContext from './BeerContext';

const BeerList = () => {
    const { beers } = useContext(BeerContext);
  
    return (
      <div className="App">
        {beers.map((beer) => (
          <Link key={beer.id} to={`/beer/${beer.id}`}>
            <h3> {beer.name}</h3>
          </Link>
        ))}
      </div>
    );
}

export default BeerList