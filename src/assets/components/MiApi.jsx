import { useEffect, useState } from "react";

const MiApi = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokeSearch, setPokeSearch] = useState("");

  const getData = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await res.json();
    setPokemon(data.results);
  };


  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <input
        className="seach"
        type="text"
        placeholder="Elige un Pokemon"
        onChange={(e) => setPokeSearch(e.target.value)}
        value={pokeSearch}
      />

      <ul className="containList">
        {pokemon
          .filter((poke) =>
            poke.name.toUpperCase().includes(pokeSearch.toUpperCase()))
          .map((poke) => {
            return (
              <li className="list" key={poke.name}>
                {poke.name}
                {}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MiApi;
