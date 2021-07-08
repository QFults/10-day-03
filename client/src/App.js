import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>
              Search
            </Link>
          </li>
          <li>
            <Link to='/saved'>
              Saved
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route path='/saved'>
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
