import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert, hideAlert } from "../redux/actions/actions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  sumbitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const { createPost, showAlert } = this.props;

    if (!title.trim()) {
      return showAlert("Empty input");
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    createPost(newPost);
    this.setState({
      title: "",
    });
  };

  changeInputHandler = (event) => {
    event.persist();
    this.setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.sumbitHandler}>
        <div className={"form-group"}>
          <label htmlFor="title">Post Title</label>
          <input
            value={title}
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className={"btn btn-success"} type="submit">
          Create
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
  hideAlert,
};

export default connect(null, mapDispatchToProps)(PostForm);
