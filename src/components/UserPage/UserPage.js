import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import axios from 'axios';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

let itemCount = 0;

let fetchItemCount = (props) => {
  console.log('going into fetchItems');
  axios ({
    method: 'GET',
    url: '/count'
  }).then((response) => {
    console.log('response is:', response);
  })
}

fetchItemCount();

const UserPage = (props) => (
  <div>
    <h1 id="welcome">
      Welcome, { props.user.username }!
    </h1>
    <p>Your ID is: {props.user.id}</p>
    <p>Number of items on your shelf: {itemCount}</p>
    <LogOutButton className="log-in" />
  </div>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
