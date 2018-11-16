import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Total extends Component {

state = {
    newTotal: [],
}

fetchItemCount = () => {
    console.log('going into fetchItems');
    axios ({
        method: 'GET',
        url: '/total/total',
    }).then((response) => {
        console.log('response is:', response.data);
        this.setState({
            newTotal: response.data
        })
    }).catch((error) => {
        console.log('error in GET request', error);
    })
}

componentDidMount () {
    this.fetchItemCount();
}

  render() {
    return (
         <div className="App">
            <ul>This works!{this.state.newTotal.map( total => (
                <li key={total.username}>
                {total.username} {''} {total.count}</li>
            ))}</ul>
        </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
  })

export default connect(mapReduxStateToProps)(Total);