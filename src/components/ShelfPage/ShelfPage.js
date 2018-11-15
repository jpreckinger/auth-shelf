import React, { Component } from 'react';

class ShelfPage extends Component {
    render() {
        return (
            <div>
                <table className="ShelfList">
               <thead>
                   <tr><th>Description</th><th>Image</th></tr>
               </thead>
               <tbody>
                   {this.props.reduxState.zooAnimals.map((classData, i) => {
                       return (<AnimalListItem key={i} classData={classData} />);
                   })}
               </tbody>
           </table>
            </div>
        );
    }
}

export default ShelfPage;