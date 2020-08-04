import React, {Component} from "react";

export default class NotFound extends Component {
    render() {
        return(
            <div>
                <h2>Sorry, page not found</h2>
                <div className="btn btn-primary" onClick={() => this.props.history.replace('/')}>Return to Home</div>
            </div>
        )
    }
}
