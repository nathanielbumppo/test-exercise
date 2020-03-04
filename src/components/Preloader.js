import React from 'react';
import { Pane, Spinner } from 'evergreen-ui';

const Preloader = () => {
  return (
    <Pane display="flex" alignItems="center" justifyContent="center" height={'100vh'}>
      <Spinner size={200}/>
    </Pane>
  )
}

export default Preloader;