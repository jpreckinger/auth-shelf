import React, {Component} from 'react';
import {connect} from 'react-redux';

class AddItems extends Component{

    state = {
        description: '',
        image: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type: 'ADD_ITEM', payload: this.state});
        this.setState({
            description: '',
            image: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" placeholder="Description" name="description" value={this.state.description}/>
                    <input onChange={this.handleChange} type="text" placeholder="Image URL" name="image" value={this.state.image}/>
                    <button type="submit">Add Item</button>
                </form>

            </div>

        )
    }
}

export default connect()(AddItems);