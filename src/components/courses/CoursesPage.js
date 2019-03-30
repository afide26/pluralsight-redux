import React, { Component } from "react";

class CoursesPage extends Component {
  state = {
    course: { title: "" }
  };

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };

    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.course.title);
  };
  render() {
    const margin = { marginBottom: "10px" };
    return (
      <>
        <h2>Courses</h2>
        <h3>Add a new course:</h3>
        <div className="form-group">
          <form onSubmit={this.handleSubmit} className="form">
            <input
              style={margin}
              type="text"
              value={this.state.course.title}
              onChange={this.handleChange}
              className="form-control"
            />
            <button style={margin} className="btn btn-success">
              Save
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default CoursesPage;
