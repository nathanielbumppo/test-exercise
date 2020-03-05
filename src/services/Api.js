import UserService from './UserService';
import PostService from './PostService';

const { getUsersData, getUserAvatar } = UserService;

const { getAllPosts, addNewPost, changePost, deletePost} = PostService;

export default {
  getUsersData,
  getUserAvatar,
  getAllPosts,
  addNewPost,
  changePost,
  deletePost
};
