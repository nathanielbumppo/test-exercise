import UserService from './UserService';
import PostService from './PostService';

const { getUsersData } = UserService;

const { getAllPosts, addNewPost, changePost, deletePost} = PostService;

export default {
  getUsersData,
  getAllPosts,
  addNewPost,
  changePost,
  deletePost
};
