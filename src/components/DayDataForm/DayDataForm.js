import React from 'react';
import moment from 'moment';
import {
    div,
    Route,
    Link,
} from 'react-router-dom';
import '../style.css'

import DataAPI from '../../api';

const constGetObservationDefaultValues = () => {
    return {
        //https://stackoverflow.com/a/37427579/1175496
        stress: false,
        lackSleep: false,
        workout: false,
        event: false

    };
}

class DayDataFormComponent extends React.Component {

    constructor(props) {

        //--
        super(props);

        // we will populate the `state`, and *change* the `state` 
        // depending on which date the URL is currently pointing at
        this.state = {
            date_iso_format: undefined,
            data: constGetObservationDefaultValues()
        };

    }

    // Read the documentation for this method:
    // > Called immediately after a component is mounted. 
    // > Setting state here will trigger re-rendering.
    // we will set state to update and show new data

    selectAllCheckboxes = isSelected => {
        Object.keys(this.state.checkboxes).forEach(checkbox => {
            // BONUS: Can you explain why we pass updater function to setState instead of an object?
            this.setState(prevState => ({
                checkboxes: {
                    ...prevState.checkboxes,
                    [checkbox]: isSelected
                }
            }));
        });
    };

    selectAll = () => this.selectAllCheckboxes(true);

    deselectAll = () => this.selectAllCheckboxes(false);

    handleCheckboxChange = changeEvent => {
        const { name } = changeEvent.target;

        this.setState(prevState => ({
            checkboxes: {
                ...prevState.checkboxes,
                [name]: !prevState.checkboxes[name]
            }
        }));
    };

    handleFormSubmit = formSubmitEvent => {
        formSubmitEvent.preventDefault();

        Object.keys(this.state.checkboxes)
            .filter(checkbox => this.state.checkboxes[checkbox])
            .forEach(checkbox => {
                console.log(checkbox, "is selected.");
            });
    };


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
            const dayData = (DataAPI.get(this.getDateIsoFormatFromRoute())
                // or else get default values....
                // https://stackoverflow.com/a/37427579/1175496
                || constGetObservationDefaultValues());

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
        const stress__val = this.state.data.stress === undefined ? 'N/A' : this.state.data.stress.toString();
        const lackSleep__val = this.state.data.lackSleep === undefined ? 'N/A' : this.state.data.lackSleep.toString();
        const workout__val = this.state.data.workout === undefined ? 'N/A' : this.state.data.workout.toString();
        const event__val = this.state.data.event === undefined ? 'N/A' : this.state.data.event.toString();

        return (<div className="day-data-container">
            <h1>
                {this.getDateIsoFormatFromRoute()}
            </h1>
            <div className="row mt-5">
                <div className="col-sm-12">
                    <form onSubmit={this.handleFormSubmit}>
                        <div>
                            <h3>
                                <label className='checkbox'> stress:
                    {/* onChange={onCheckboxChange} 
                WARNING:  You provided a `checked` prop to a form field without an `onChange` handler.
                 This will render a read-only field. If the field should be mutable use `defaultChecked`. 
                 Otherwise, set either `onChange` or `readOnly`
                */}
                                    <input
                                        type="checkbox"
                                        name="stress"
                                        checked={this.state.data.stress}
                                        className="form-check-input"
                                    />
                                </label>
                            </h3>
                            <h3>
                                <label> lack sleep:
                    <input
                                        type="checkbox"
                                        name="lack sleep"
                                        checked={this.state.data.lackSleep}
                                        className="form-check-input" />
                                </label>
                            </h3>
                            <h3>
                                <label> workout:
                    <input
                                        type="checkbox"
                                        name="workout"
                                        checked={this.state.data.workout}
                                        className="form-check-input" />
                                </label>
                            </h3>
                            <hr />
                            <h3>
                                <label> event:
                    <input
                                        type="checkbox"
                                        name="event"
                                        checked={this.state.data.event}
                                        className="form-check-input" />
                                </label>
                            </h3>
                            <div className="form-group mt-2">
                                <button
                                    type="button"
                                    className="btn btn-outline-primary mr-2"
                                    onClick={this.selectAll}
                                >
                                    Select All
                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary mr-2"
                                    onClick={this.deselectAll}
                                >
                                    Deselect All
                </button>
                                <button type="submit" className="btn btn-primary">
                                   <Route path={`${this.props.match.path}/:date_iso_format`}
                                    render={(props) => <DayDataForm {...props} updateConstant={this.updateConstant} />} />
                                    Save
                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>);
    }
}

export default (props) => {
    // https://flaviocopes.com/react-pass-props-to-children/
    // 
    return <DayDataFormComponent {...props}></DayDataFormComponent>
}
