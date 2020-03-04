import React, { useState } from 'react';
import { TextInputField, Textarea, SelectMenu, Button } from 'evergreen-ui';
import Api from '../services/Api';

const ChangePostForm = ({store, id}) => {
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
    selected: {
      label: currentUser.name,
      value: currentUser.id
    }
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    changePost(state.id, state.title, state.body, state.selected.value);
  }

  return (
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
        label="Body"
        onChange={e => setState({ ...state, body: e.target.value })}
        value={state.body}
      />
      <SelectMenu
        title="Select user"
        options={
          users.map(user => ({label: user.name, value: user.id}))
        }
        onSelect={item => {setState({ ...state, selected: {
          label: item.label,
          value: item.value
        } 
        })}}
      >
        <Button>{state.selected.label || 'Select name...'}</Button>
      </SelectMenu>
      <Button appearance="primary" type="submit">Сохранить</Button>
    </form>
  )
};

export default ChangePostForm;