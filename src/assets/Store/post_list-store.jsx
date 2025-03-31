import { createContext, useReducer, useState } from "react";

export const postListfromcontext = createContext({
  fatching: false,
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [fatching, setFatching] = useState(true);

  if (fatching) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((promis) => {
        setFatching(false);
        // console.log(promis.posts);
        addInitialPost(promis.posts);
      });
  }

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addInitialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts: posts,
      },
    });
  };

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <postListfromcontext.Provider
      value={{
        fatching: fatching,
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </postListfromcontext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends, I am going to Mumbai",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai"],
  },
];
export default PostListProvider;
