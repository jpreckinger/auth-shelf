import React, {Component} from 'react';

class AddItems extends Component{

    state = {
        newItem: '',
        description: '',
        image: '',
    }

    handleSubmit = () => {
        this.props.dispatch(type: )
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
                    <input onChange={this.handleChange} type="text" placeholder="New Item" name="newItem" value={this.state.newItem}/>
                    <input onChange={this.handleChange} type="text" placeholder="Description" name="description" value={this.state.description}/>
                    <input onChange={this.handleChange} type="text" placeholder="Image URL" name="image" value={this.state.image}/>
                </form>

            </div>

        )
    }
}

export default AddItems;