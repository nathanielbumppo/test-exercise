import React, { useState, useEffect, createContext } from 'react';
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

export const StoreContext = createContext({});

const App = () => {
  const { getUsersData, getAllPosts } = Api;
  const [store, setStore] = useState({});

  useEffect(() => {
    getUsersData()
    .then((response) => setStore({
      ...store,
      usersData: response.data
    }));
  
  getAllPosts()
    .then((response) => setStore({
      ...store,
      posts: response.data
    }));
  }, [getUsersData, getAllPosts])

  return (
    <div className="App">
      <StoreContext.Provider value={store}>
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
      </StoreContext.Provider>
    </div>
  );
}

export default App;
