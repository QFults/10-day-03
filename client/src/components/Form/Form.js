import {
  Button,
  Form as Frm,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

const Form = props => {
  return (
    <Frm>
      <FormGroup>
        <Label for='search'>Search</Label>
        <Input
          type='text'
          name='search'
          placeholder='pikachu'
          value={props.search}
          onChange={props.handleInputChange}
        />
      </FormGroup>
      <Button
        color='primary'
        onClick={props.handleSearchPokemon}
      >
        Find Pokemon
      </Button>
    </Frm>
  )
}

export default Form
