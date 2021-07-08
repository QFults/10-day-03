import { useState } from 'react'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'
import Appbar from './components/Appbar'

const App = () => {
  const [pokeState, setPokeState] = useState({
    search: '',
    pokemon: {},
    pokemons: []
  })

  const handleInputChange = ({ target }) => {
    setPokeState({ ...pokeState, [target.name]: target.value })
  }

  const handleSearchPokemon = event => {
    event.preventDefault()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeState.search}`)
      .then(({ data: pokemon }) => {
        console.log(pokemon)
        setPokeState({ ...pokeState, pokemon, search: '' })
      })
  }

  const handleSavePokemon = () => {
    const pokemons = [...pokeState.pokemons]
    pokemons.push(pokeState.pokemon)
    setPokeState({ ...pokeState, pokemons, pokemon: {} })
  }
  return (
    <Router>
      <div>
        <Appbar />
        <Switch>
          <Route exact path='/'>
            <Search
              search={pokeState.search}
              pokemon={pokeState.pokemon}
              handleSavePokemon={handleSavePokemon}
              handleInputChange={handleInputChange}
              handleSearchPokemon={handleSearchPokemon}
            />
          </Route>
          <Route path='/saved'>
            <Saved
              pokemons={pokeState.pokemons}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
