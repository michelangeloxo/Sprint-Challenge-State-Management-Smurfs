import React, { useEffect, Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { getSmurf } from '../action';
import { addSmurf } from '../action';

import Form from './Form';

function App (props) {
  // console.log(props);
  useEffect(() => {
    props.getSmurf();
  }, []);

    return (
      <div className="App">
        <h1>SMURFS VILLAGE</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        {/* <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        {props.smurfs.map(smurf=> {
          // console.log(smurf);
        return<SmurfComponent smurf={smurf} key={smurf.id} />
      })}
      <Form /> 
      </div>
    );
}

const SmurfComponent = (props) => {
  console.log(props);
  return (
  <div>
    <p>{props.smurf.name},
       {props.smurf.age}, 
       {props.smurf.height}, 
       {props.smurf.id}</p>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
  };
};

export default connect(mapStateToProps, {getSmurf, addSmurf})(App);

