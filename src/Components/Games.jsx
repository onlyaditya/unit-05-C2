import { useEffect, useState } from "react";
import { GameInput } from "./GameInput";
import { GamesDisplay } from "./GamesDisplay";

// const url = "http://localhost:3001/games";

export const Games = () => {
  const [games, setGames] = useState([]);
  const [price, setPrice] = useState(true)
  const [nameSort, setNameSort] = useState(true)
  const [rating, setRating] = useState(true) 

  useEffect(() => {
    getGames("http://localhost:3001/games");
    handleNameSort();
  }, []);

  const getGames = (url) => {
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.log(error.message));
  };

  const handleSubmit = (data) => {
    fetch("http://localhost:3001/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    getGames("http://localhost:3001/games");
  };

  const handleNameSort = () => {
      
    if (nameSort) {
        getGames("http://localhost:3001/games?_sort=gamename&_order=asc");
    }
    else {
        getGames("http://localhost:3001/games?_sort=gamename&_order=desc");

    }
    setNameSort(!nameSort)
  };

  const handleStarSort = () => {
    if (rating) {
        getGames("http://localhost:3001/games?_sort=gamerating&_order=desc");
    }
    else {
        getGames("http://localhost:3001/games?_sort=gamerating&_order=asc");
    }
    setRating(!rating)
  };

  const handlePriceSort = () => {

    if (price) {
        getGames(`http://localhost:3001/games?_sort=gameprice&_order=desc`);
    }
    else {
        getGames(`http://localhost:3001/games?_sort=gameprice&_order=asc`);
    }
    setPrice(!price)
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    const url = `http://localhost:3001/games?q=${value}`;
    getGames(url);
  };

  return (
    <>
      <GameInput handleSubmit={handleSubmit} />
      <GamesDisplay
        games={games}
        handleNameSort={handleNameSort}
        handleStarSort={handleStarSort}
        handlePriceSort={handlePriceSort}
        handleSearch={handleSearch}
      />
    </>
  );
};
