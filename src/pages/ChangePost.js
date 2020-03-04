import React, { useContext } from 'react';
import { StoreContext } from '../App';

const ChangePost = () => {
  const value = useContext(StoreContext);
  console.log(value);
  return (
    <div>ChangePost</div>
  )
};

export default ChangePost;