import React from "react";
import { connect } from "react-redux";

const JokesList = props => {
  return (
    <div>
      {props.error ? (
        <div className="error"> {props.error}</div>
      ) : (
        props.jokes.map(joke => <div>{joke.setup}</div>)
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    jokes: state.jokes,
    error: state.error
  };
};
export default connect(mapStateToProps, {})(JokesList);
