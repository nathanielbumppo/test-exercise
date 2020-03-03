import React from 'react';
import Api from "./services/Api";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import ChangePost from './pages/ChangePost';
import CreatePost from './pages/CreatePost';
import NoMatch from './pages/NoMatch';

const App = () => {
  const { getUsersData, getAllPosts } = Api;
  
  getUsersData()
    .then((item) => console.log(item.data))
  
  getAllPosts()
    .then((item) => console.log(item.data))

  return (
    <div className="App">
      <main>
        <Router>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/change" component={ChangePost}/>
            <Route path="/create" component={CreatePost}/>
            <Route path="*" component={NoMatch}/>
          </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
