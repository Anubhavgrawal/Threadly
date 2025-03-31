import { useContext } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { postListfromcontext } from "../Store/post_list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(postListfromcontext);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      {/* <img src="..." className="card-img-top" alt="..." /> */}
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdOutlineDeleteSweep />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {/* <a href="#" className="btn btn-primary">
          Go somewhere
        </a> */}
        {post.tags.map((item) => (
          <span key={item} className="badge text-bg-primary hastag">
            {item}
          </span>
        ))}
        <div
          className="alert alert-success reactions"
          style={{ margin: "15px 0 0 0" }}
          role="alert"
        >
          {/* {post.reactions} */} people found this intresting
        </div>
      </div>
    </div>
  );
};

export default Post;
