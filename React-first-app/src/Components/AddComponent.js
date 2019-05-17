import React, { Component } from 'react';

class AddComponent extends Component {
    render() {
        console.log(this.props.passPorps)
        return (
            <div>
                <h1>Passing the props</h1>
                {/* map is used to go through all the values inside the object, similar to forEach */}
                {this.props.passPorps.map((propValues) => (
                    //prints the output
                    <h3>{propValues.value}</h3>
                ))}
            </div>
        )
    }
}

export default AddComponent;