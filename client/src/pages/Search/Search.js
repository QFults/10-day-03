import {
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap'
import Form from '../../components/Form'

const Search = () => {
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
          <Form />
        </Col>
        <Col sm={6}>
          display
        </Col>
      </Row>
    </Container>
  )
}

export default Search
