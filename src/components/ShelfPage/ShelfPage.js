import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShelfListItem from '../ShelfListItem/ShelfListItem';
import ShitForm from '../AddItem/AddItem';

class ShelfPage extends Component {

    componentDidMount () {
        this.props.dispatch({type: 'GET_SHELF'});
      }

    render() {
        return (
            <div>
                <ShitForm />
                <table className="ShelfList">
               <thead>
                   <tr><th>Description</th><th>Image</th></tr>
               </thead>
               <tbody>
                   {this.props.reduxState.shelf.map((items, i) => {
                       return (<ShelfListItem key={i} shelfItems={items} />);
                   })}
                   {/* {this.props.reduxState.shelf.map( items => (
                        <tr key={items.id}>
                            <td>{items.description}</td>
                            <td key={items.id}><img src={items.image_url} alt={items.description}/></td>
                        </tr>
                        ))} */}
               </tbody>
           </table>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({reduxState});

export default connect(mapReduxStateToProps)(ShelfPage);