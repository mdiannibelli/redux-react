import React, { useEffect } from 'react'
import './PokemonAppSpinner.css'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { getPokemons } from './store/slices/pokemon'

export default function PokemonApp() {
    const dispatch = useDispatch()
    const {isLoading, page, pokemons} = useSelector(state => state.pokemons)
    console.log(isLoading)
    console.log(pokemons)

    useEffect(() => {
        dispatch(getPokemons()) 
    }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <h1>Pokemon App</h1>
        <h2>Loading:</h2>
        {isLoading ? <div className="lds-ripple"><div></div><div></div></div> : null}
      </div>
        <div>
          {pokemons.map((pokemon, i) => (
            <div key={i}>
              <p>{pokemon.id}</p>
              <span>{pokemon.name}</span>
            </div>
          ))}
        </div>
        <button onClick={() => dispatch(getPokemons(page + 1))}>Next Page</button>
    </div>
  )
}
