import { useContext, useRef } from "react";
import { postListfromcontext } from "../Store/post_list-store";

const CreatePost = () => {
  const { addPost } = useContext(postListfromcontext);
  let userId = useRef();
  let Title = useRef();
  let Body = useRef();
  let reactions = useRef();
  let tags = useRef();

  let handleSubmit = (event) => {
    event.preventDefault();
    const tempuserId = userId.current.value;
    const tempTitle = Title.current.value;
    const tempBody = Body.current.value;
    const tempreactions = reactions.current.value;
    const temptags = tags.current.value.split(" ");

    userId.current.value = "";
    Title.current.value = " ";
    Body.current.value = " ";
    reactions.current.value = " ";
    tags.current.value = " ";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: tempTitle,
        body: tempBody,
        reactions: tempreactions,
        userId: tempuserId,
        tags: temptags,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
  };

  return (
    <form className="create-post" onSubmit={(event) => handleSubmit(event)}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input type="text" className="form-control" id="userId" ref={userId} />
      </div>
      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Title
        </label>
        <input type="text" className="form-control" id="Title" ref={Title} />
      </div>
      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Contant
        </label>
        <textarea type="text" className="form-control" id="Body" ref={Body} />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactions}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input type="text" className="form-control" id="tags" ref={tags} />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
