import React from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";
import Alert from "./components/Alert";
import { connect } from "react-redux";

function App({ isShowAlert }) {
  return (
    <div className="container pt-3">
      {isShowAlert && <Alert text={isShowAlert} />}

      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Синхронные посты</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Асинхронные посты</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isShowAlert: state.app.alert,
  };
};

export default connect(mapStateToProps)(App);
