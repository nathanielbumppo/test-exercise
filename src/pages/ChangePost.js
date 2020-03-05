import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { StoreContext } from '../App';
import { Pane, Button } from 'evergreen-ui';

import ChangePostForm from '../components/ChangePostForm';
import Preloader from '../components/Preloader';

const ChangePost = ({history}) => {
  const store = useContext(StoreContext);
  let { id } = useParams();

  return (
    <div className="change-post">
      <Pane>
        <Link to="/">
          <Button appearance="primary" intent="success">Back</Button>
        </Link>
      </Pane>
      {
        store.users && store.posts ? <ChangePostForm id={id} store={store} history={history}/> : <Preloader size={200}/>
      }
    </div>
  )
};

export default ChangePost;