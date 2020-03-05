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
    Promise.all([getUsersData(), getAllPosts()]).then((response) => {
      setStore({
        ...store,
        users: response[0].data,
        posts: response[1].data,
      });
    })
    //eslint-disable-next-line
  }, []);

  return (
    <div className="app">
      <StoreContext.Provider value={store}>
        <main className="app__main">
          <Router>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/change_:id" component={ChangePost}/>
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
