import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  obtenerPokemonesAccion,
  siguientePokeAction,
} from "../redux/pokeDucks";

const Pokemones = (props) => {
  const dispatch = useDispatch();

  const pokemones = useSelector((store) => store.pokemones.array);

  return (
    <div>
      {" "}
      Lista de pokemones
      <button onClick={() => dispatch(obtenerPokemonesAccion())}>
        {" "}
        get Pokemones
      </button>
      <button onClick={() => dispatch(siguientePokeAction(20))}>
        Siguientes
      </button>
      <ul>
        {pokemones.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pokemones;
