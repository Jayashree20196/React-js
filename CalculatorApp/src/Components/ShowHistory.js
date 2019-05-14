import React, { Component } from 'react';
import './ShowHistory.css';

class ShowHistory extends Component {

    render() {
        return (
            <div className="showHistory"
                onClick={() => this.props.handleShow()}>
                {this.props.children}
            </div>

        );
    }
}

export default ShowHistory;