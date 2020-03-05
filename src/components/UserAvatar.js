import React, { useState, useEffect } from 'react';
import Api from '../services/Api';
import { Avatar } from 'evergreen-ui';

import Preloader from './Preloader';

const UserAvatar = ({name}) => {
  const [userAvatar, setUserAvatar] = useState('');
  const [showPreloader, setShowPreloader] = useState(true);
  const { getUserAvatar } = Api;
  useEffect(() => {
    getUserAvatar(name).then((response) => {
      const url = response.config.url;
      setUserAvatar(url);
      setShowPreloader(false);
    });
    //eslint-disable-next-line
  }, [])


  return (
    <>
    {
      showPreloader ? <Preloader size={20} /> : <Avatar src={userAvatar} name={name}/>
    }
    </>
  );
};

export default UserAvatar;