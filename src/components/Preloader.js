import React from 'react';
import { Pane, Spinner } from 'evergreen-ui';

const Preloader = ({size}) => {
  return (
    <Pane display="flex" alignItems="center" justifyContent="center" height={'100vh'}>
      <Spinner size={size}/>
    </Pane>
  )
}

export default Preloader;