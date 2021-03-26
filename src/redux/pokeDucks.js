import axios from "axios";
import { useMutation } from "@apollo/client";

// controllers
import { GET_ALL_CITIES } from "../controllers/citiesControllers";

// constantes
const dataInicial = {
  array: [],
  offset: 0,
};

const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const GET_POKE_NEXT_SUCCESS = "GET_POKE_NEXT_SUCCESS";

// reducer
export default function pokeReducer(state = dataInicial, action) {
  switch (action.type) {
    case OBTENER_POKEMONES_EXITO:
      return { ...state, array: action.payload };
    case GET_POKE_NEXT_SUCCESS:
      return {
        ...state,
        array: action.payload.array,
        offset: action.payload.offset,
      };
    default:
      return state;
  }
}

// Acciones
export const obtenerPokemonesAccion = () => async (dispatch, getState) => {
  const { offset } = getState().pokemones;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );

    dispatch({ type: OBTENER_POKEMONES_EXITO, payload: res.data.results });
  } catch (error) {
    console.log(error);
  }
};

export const siguientePokeAction = (numero) => async (dispatch, getState) => {
  const { offset } = getState().pokemones;
  const siguiente = offset + numero;

  console.log("siguiente: ", siguiente);
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=20`
    );
    dispatch({
      type: GET_POKE_NEXT_SUCCESS,
      payload: {
        array: res.data.results,
        offset: siguiente,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export const addCity = () => async (dispatch, getState) => {
  const { offset } = getState().pokemones;

  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
    );

    dispatch({ type: OBTENER_POKEMONES_EXITO, payload: res.data.results });
  } catch (error) {
    console.log(error);
  }
};
