import React, { useContext } from 'react';
import { StoreContext } from '../App';

import PostTable from '../components/PostsTable';
import Preloader from '../components/Preloader';

const Home = () => {
  const store = useContext(StoreContext);

  return (
    <div className="home">
      {
        store.users && store.posts ? <PostTable store={store}/> : <Preloader size={200}/>
      }
    </div>
  )
};

export default Home;