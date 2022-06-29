import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Beer = () => {
  let { beerId } = useParams();
  const [beer, setBeer] = useState({});

  console.log('beer',beer);

  const fetchBeer = () => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${beerId}`)
      .then((response) => response.data)
      .then((data) => setBeer(data[0]));
  };
  useEffect(() => {
    fetchBeer();
  }, []);
  return (
    <div>
      <Link to="/">Home</Link>
      <button>Delete</button>
      <h2>{beer.name} </h2>
      <img src={beer.image_url} alt="" />
      <p>{beer.description}</p>
    </div>
  );
};

export default Beer;
