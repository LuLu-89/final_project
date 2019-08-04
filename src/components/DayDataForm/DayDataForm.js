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
        super(props);

        this.state = {
            data: null,
        };

    }

    // Read the documentation for this method:
    // > Called immediately after a component is mounted. 
    // > Setting state here will trigger re-rendering.
    // we will set state to update and show new data
    componentDidMount() {
        // 
        // How to fetch data in React?
        // https://www.robinwieruch.de/react-fetching-data/
        // see this method, you must change how it works
        var dayData = DataAPI.get(this.props.match.params.date_iso_format);

        this.setState({ data: dayData });

    }

    render(){
        return <h1>{this.props.match.params.date_iso_format}</h1>
    }

}

export default (props) => {
    return <DayDataFormComponent {...props}></DayDataFormComponent>
}