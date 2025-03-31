import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/Components/Header";
import Footer from "./assets/Components/Footer";
import Sidebar from "./assets/Components/Sidebar";
import CreatePost from "./assets/Components/CreatePost";
import PostList from "./assets/Components/PostList";
import PostListProvider from "./assets/Store/post_list-store";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>

          {selectedTab === "Home" && <PostList></PostList>}
          {selectedTab === "Create post" && <CreatePost></CreatePost>}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
