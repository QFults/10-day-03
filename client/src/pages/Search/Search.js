import {
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap'
import Form from '../../components/Form'
import Display from '../../components/Display'

const Search = props => {
  return (
    <Container>
      <Row>
        <Jumbotron>
          <h1 className='display-3'>Pokemon App</h1>
          <p className='lead'>This is an app to search for any pokemon in existence and add them to your pokemon collection.</p>
          <hr className='my-2' />
        </Jumbotron>
      </Row>
      <Row>
        <Col sm={6}>
          <Form
            search={props.search}
            handleInputChange={props.handleInputChange}
            handleSearchPokemon={props.handleSearchPokemon}
          />
        </Col>
        <Col sm={6}>
          {
            props.pokemon.hasOwnProperty('name')
              ? <Display
                  pokemon={props.pokemon}
                  handleSavePokemon={props.handleSavePokemon}
                />
              : null
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Search
