import Display from '../../components/Display'

const Saved = props => {
  return (
    <div>
      {
        props.pokemons.map((pokemon, i) => (
          <Display
            key={i}
            pokemon={pokemon}
          />
        ))
      }
    </div>
  )
}

export default Saved
