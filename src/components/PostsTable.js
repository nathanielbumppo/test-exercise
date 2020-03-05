import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../services/Api';
import { Table, IconButton, Pane, Button } from 'evergreen-ui';

import UserAvatar from '../components/UserAvatar';
import Modal from '../components/Modal';

const PostsTable = ({store}) => {
  const { users, posts } = store;
  const { deletePost } = Api;
  const [showModal, setShowModal] = useState(false);

  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user.name;
  };

  const handleDeletePost = (postId) => {
    deletePost(postId);
    setShowModal(true)
  }

  return (
    <div className="posts">
      <Pane display="flex" justifyContent="flex-end" marginBottom={20}>
        <Link to="/create">
          <Button appearance="primary" intent="success" iconAfter="plus">Create</Button>
        </Link>
      </Pane>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell flexBasis={'70%'} flexShrink={0} flexGrow={0}>
            Title
          </Table.TextHeaderCell>
          <Table.TextHeaderCell flexBasis={'20%'} flexShrink={0} flexGrow={0}>
            User
          </Table.TextHeaderCell>
          <Table.TextHeaderCell flexBasis={'10%'} flexShrink={0} flexGrow={0}>
            Actions
          </Table.TextHeaderCell>
        </Table.Head>
          <Table.Body>
            {posts.map(post => (
              <Table.Row key={post.id}>
                <Table.TextCell flexBasis={'70%'} flexShrink={0} flexGrow={0}>
                  {post.title}
                </Table.TextCell>
                <Table.TextCell flexBasis={'20%'} flexShrink={0} flexGrow={0}>
                  <UserAvatar name={getUserName(post.userId)}/>
                </Table.TextCell>
                <Table.TextCell flexBasis={'10%'} flexShrink={0} flexGrow={0}>
                  <Pane display="flex" align-items="center">
                    <IconButton icon="trash" intent="danger" marginRight={5} flexShrink={0} flexGrow={0} onClick={e => handleDeletePost(post.id)}/>
                    <Link to={`/change_${post.id}`}>
                      <IconButton icon="edit" flexShrink={0} flexGrow={0}/>
                    </Link>
                  </Pane>
                </Table.TextCell>
              </Table.Row>
            ))}
          </Table.Body>
      </Table>
      <Modal 
        isShown={showModal}
        title="Do you want to delete this post?"
        message="If yes, press confirm"
        onClose={() => setShowModal(false)}
        confirmLabel="Confirm"
      />
    </div>
  )
};

export default PostsTable;