import React, { useState } from 'react';
import { TextInputField, Textarea, Select, Button } from 'evergreen-ui';
import Api from '../services/Api';

import Modal from './Modal';

const CreatePostForm = ({ users, history }) => {
  const { addNewPost } = Api;
  const [state, setState] = useState({
    title: '',
    body: '',
    userId: ''
  });
  const [showModal, setShowModal] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewPost(state.title, state.body, state.userId);
    setShowModal(true);
  }

  const handleClose = () => {
    history.push('/');
  }

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
          <option value="" disabled>Select User</option>
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

export default CreatePostForm;