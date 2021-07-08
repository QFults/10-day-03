import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from 'reactstrap'

const Display = props => {
  return (
    <Card>
      <CardImg top width='100%' src={props.pokemon.sprites.front_default} alt={props.pokemon.name} />
      <CardBody>
        <CardTitle tag='h5'>{props.pokemon.name}</CardTitle>
        <CardSubtitle tag='h6' className='mb-2 text-muted'>Type: {props.pokemon.types[0].type.name}</CardSubtitle>
        <CardText>
          Abilities
          {
            props.pokemon.abilities.map(({ ability }, i) => (
              <p key={i}>#{i + 1} {ability.name}</p>
            ))
          }
        </CardText>
        {
          props.handleSavePokemon
            ? <Button
                color='success'
                onClick={props.handleSavePokemon}
              >
              save
              </Button>
            : null
        }
      </CardBody>
    </Card>
  )
}

export default Display
