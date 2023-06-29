import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import PostDetails from './PostDetails';
import NotFound from './NotFound';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  const title = "App Welcome to our new blog";
  const likes = 50;
  const link = "https://wwww.google.com"

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <PostDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
