import React from 'react';
import { Link } from 'react-router-dom';
import { Table, IconButton, Pane, Button } from 'evergreen-ui';

const PostsTable = ({store}) => {
  const { users, posts } = store;
  
  const getUserName = (userId) => {
    const user = users.find(user => user.id === userId);
    return user.name;
  };

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
                  {getUserName(post.userId)}
                </Table.TextCell>
                <Table.TextCell flexBasis={'10%'} flexShrink={0} flexGrow={0}>
                  <Pane display="flex" align-items="center">
                    <IconButton icon="trash" intent="danger" marginRight={5}/>
                    <Link to={`/change_${post.id}`}>
                      <IconButton icon="edit"/>
                    </Link>
                  </Pane>
                </Table.TextCell>
              </Table.Row>
            ))}
          </Table.Body>
      </Table>
    </div>
  )
};

export default PostsTable;