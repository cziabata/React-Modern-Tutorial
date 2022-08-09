import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/create" exact><Create /></Route>
          <Route path="/blogs/:id" exact><BlogDetails /></Route>
          <Route path="*"><NotFound /></Route>
        </Switch>
        
      </div>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

// npx json-server --watch data/db.json --port 8000