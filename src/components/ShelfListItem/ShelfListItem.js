import React, { Component } from 'react';

// MODIFY THIS FILE FOR BASE MODE!

class ShelfListItem extends Component {
    // Renders the list of shelf items
    render() {
        return (
            <tr>
                <td>{this.props.items.description}</td>
                <td><img src={this.props.items.image_url} alt={this.props.items.description}/></td>
            </tr>
        );
    }
}

export default ShelfListItem;