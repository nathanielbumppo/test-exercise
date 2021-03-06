import React, { useState } from 'react';
import { TextInputField, Textarea, Select, Button } from 'evergreen-ui';
import Api from '../services/Api';

import Modal from './Modal';

const ChangePostForm = ({store, id, history}) => {
  const { users, posts } = store;
  const { changePost } = Api;
  const postId = +id;
  const currentPost = posts.find(post => post.id === postId);
  const currentUser = users.find((user) => user.id === currentPost.userId);

  const { title, body } = currentPost;
  const [state, setState] = useState({
    title,
    body,
    id: postId,
    userId: currentUser.id
  });
  const [showModal, setShowModal] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    changePost(state.id, state.title, state.body, state.userId);
    setShowModal(true);
  }

  const handleClose = () => {
    history.push('/')
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextInputField
          name="title"
          label="Title"
          value={state.title}
          onChange={e => {setState({ ...state, title: e.target.value})}}
          required
        />
        <Textarea
          name="body"
          onChange={e => setState({ ...state, body: e.target.value })}
          value={state.body}
        />
        <Select
          title="Select user"
          value={state.userId}
          onChange={event => setState({ ...state, userId: event.target.value })}
          required
        >
          {
            users.map(user => (
              <option value={user.id} key={user.id}>{user.name}</option>
            ))
          }
        </Select>
        <Button appearance="primary" type="submit">Сохранить</Button>
      </form>
      <Modal 
        isShown={showModal}
        title="Congratulations, you changed the post."
        message="Data sent, all right"
        onClose={handleClose}
        hasFooter={false}
      />
    </>
  )
};

export default ChangePostForm;