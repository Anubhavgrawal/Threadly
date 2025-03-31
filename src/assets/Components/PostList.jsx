import Post from "./post";
import { useContext } from "react";
import { postListfromcontext as PostListData } from "../Store/post_list-store";
import WelcomePage from "./Welcomepage";
import FatchingState from "./FatchingState";

const PostList = () => {
  const { fatching, postList } = useContext(PostListData);

  const welcomeMessage = () => {
    return <WelcomePage></WelcomePage>;
  };
  return (
    <>
      {fatching && <FatchingState></FatchingState>}
      {!fatching && postList.length === 0 && welcomeMessage()}
      {!fatching && postList.map((item) => <Post key={item.id} post={item} />)}
    </>
  );
};

export default PostList;
