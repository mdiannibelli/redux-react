import { pokemonAPI } from "../../../api/pokemonAPI"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

// Buscamos realizar un thunk que al ejecutarse va a llamar al isLoading o al setPokemos cuando se resuelva
export const getPokemons = ( page = 0) => {
    // la otra función
    return async(dispatch /* para hacer el dispatch de otra funcion */, getState) => {
        dispatch(startLoadingPokemons()) // isLoading = true;

        // Realizar petición con fetch
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`)
        // const data = await response.json();
        // console.log(data)
        
        // Realizar petición con axios
        const {data} = await pokemonAPI.get(`/pokemon?limit=10&offset=${ page * 10 }`)
         //console.log(data.results)

       
        const pokemones = data.results.map(pokemon => ({
            id: pokemon.url.split('/').at(-2),
            name: pokemon.name
        }))
       
        dispatch(setPokemons({pokemons: pokemones, page: page + 1})) // pokemons arr
    }
}