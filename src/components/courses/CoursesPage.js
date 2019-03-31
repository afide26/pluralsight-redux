import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

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
    this.props.actions.createCourse(this.state.course);
  };
  render() {
    return (
      <>
        <h2>Courses</h2>
        <h3>Add a new course:</h3>
        <div className="form-group">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.course.title}
              onChange={this.handleChange}
            />
            <input type="submit" value="Save" />
            {this.props.courses.map(course => (
              <div key={course.title}>{course.title}</div>
            ))}
          </form>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoursesPage);
