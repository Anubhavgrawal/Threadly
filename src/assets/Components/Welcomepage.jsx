const WelcomePage = ({ onGetPostClick }) => {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">Nothink to Post</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          My social media work as u can first fatch all previous posts then u
          can also create new post and also delete any post
        </p>
        {/* <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-primary btn-lg px-4 gap-3"
            onClick={onGetPostClick}
          >
            Fatch all data
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default WelcomePage;
