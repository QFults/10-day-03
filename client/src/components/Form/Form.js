import {
  Button,
  Form as Frm,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

const Form = () => {
  return (
    <Frm>
      <FormGroup>
        <Label for='search'>Search</Label>
        <Input type='email' name='search' placeholder='pikachu' />
      </FormGroup>
      <Button color='primary'>Find Pokemon</Button>
    </Frm>
  )
}

export default Form
