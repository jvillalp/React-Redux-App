import React from "react";
import {connect} from 'react-redux';

const JokesList = props => {
  return (
    <div>
      {props.jokes.map(joke => <div>{jokes.joke_name}</div>)}
    </div>
  );
};

const mapStateToProps = state =>{
    return {
        jokes: state.jokes
    }
};
export default connect(mapStateToProps, {})(JokesList);
