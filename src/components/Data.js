import React from 'react';


// https://stackoverflow.com/questions/41374572/how-to-render-an-array-of-objects-in-react?rq=1
class DataComponent extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    const DataAPI = [
      ('date_data': {
        '2019-08-02': {
          // your `X`
          stress: false,
          lackSleep: false,
          workout: false,

          // your `y`
          event: true
        },

        '2019-08-03': {
          // your `X`
          stress: false,
          lackSleep: true,
          workout: false,

          // your `y`
          event: true
        },

        '2019-08-04': {
          // your `X`
          stress: false,
          lackSleep: false,
          workout: false,

          // your `y`
          event: true
        },

        '2019-08-05': {
          // your `X`
          stress: true,
          lackSleep: true,
          workout: false,

          // your `y`
          event: false
        },

        '2019-08-06': {
          // your `X`
          stress: false,
          lackSleep: true,
          workout: true,

          // your `y`
          event: true
        }
        
      })];


    return (
      <div>
        {DataAPI.map(function(d, idx) {
          return (<li key = {idx}>{d.data_date}</li>)
        })}
      </div>
    );
  }
}

export default DataComponent
