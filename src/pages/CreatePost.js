import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../App';
import { Pane, Button } from 'evergreen-ui';

import CreatePostForm from '../components/CreatePostForm';
import Preloader from '../components/Preloader';

const CreatePost = ({history}) => {
  const store = useContext(StoreContext);
  const { users } = store;
  return (
    <div>
      <Pane>
        <Link to="/">
          <Button appearance="primary" intent="success">Back</Button>
        </Link>
      </Pane>
      {
        store.users && store.posts ? <CreatePostForm users={users} history={history}/> : <Preloader size={200}/>
      }
    </div>
  )
};

export default CreatePost;