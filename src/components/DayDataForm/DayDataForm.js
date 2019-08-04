import React from 'react';
import moment from 'moment';

import {
    div,
    Route,
    Link,
} from 'react-router-dom';

import DataAPI from '../../api';

class DayDataFormComponent extends React.Component {

    constructor(props) {

        //--
        super(props);

        // we will populate the `state`, and *change* the `state` depending on which date the URL is currently pointing at
        this.state = {
            date_iso_format: undefined,
            data: {}

        };

    }

    // Read the documentation for this method:
    // > Called immediately after a component is mounted. 
    // > Setting state here will trigger re-rendering.
    // we will set state to update and show new data

    //https://egghead.io/lessons/javascript-redux-fetching-data-on-route-change
    // componentDidMount() {
    componentDidUpdate() {

        // ERROR: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nes
        // > You may call setState() immediately in componentDidUpdate() but note that it must be wrapped in a condition 
        // https://reactjs.org/docs/react-component.html#componentdidupdate

        if (this.state.date_iso_format !== this.getDateIsoFormatFromRoute()) {

            // How to fetch data in React?
            // https://www.robinwieruch.de/react-fetching-data/
            // see this method, you must change how it works
            const dayData = DataAPI.get(this.getDateIsoFormatFromRoute()) || {};

            this.setState({
                date_iso_format: this.getDateIsoFormatFromRoute(),
                data: dayData
            });
        }
    }

    getDateIsoFormatFromRoute() {
        // gets the "params" passed in by React UI Routing
        // can't put in constructor because constructor is not re-run 
        return this.props.match
            && this.props.match.params
            && this.props.match.params.date_iso_format;

    }

    render() {
        const feature_1__val = this.state.data.feature_1 === undefined ? 'N/A' : this.state.data.feature_1.toString();
        const feature_2__val = this.state.data.feature_2 === undefined ? 'N/A' : this.state.data.feature_2.toString();
        const feature_3__val = this.state.data.feature_3 === undefined ? 'N/A' : this.state.data.feature_3.toString();
        const target__val = this.state.data.target === undefined ? 'N/A' : this.state.data.target.toString();

        return (<div className="day-data-container">
            <h1>
                {this.getDateIsoFormatFromRoute()}
            </h1>
            <div>
                <h3><label> Feature 1: </label> {feature_1__val}</h3>
                <h3> <label> Feature 2: </label> {feature_2__val}</h3>
                <h3><label> Feature 3: </label> {feature_3__val}</h3>
                <hr />
                <h3><label> Target: </label> {target__val}</h3>
            </div>
        </div>);

    }

}

export default (props) => {
    // https://flaviocopes.com/react-pass-props-to-children/
    // 
    return <DayDataFormComponent {...props}></DayDataFormComponent>
}