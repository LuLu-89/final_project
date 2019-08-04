// following this example: https://codesandbox.io/s/vvoqvk78?from-embed

// A simple data API that will be used to get the data for our
// components. On a real website, a more robust data fetching
// solution would be more appropriate.
const DataAPI = {

    // TODO: These are only sample "seed" / fake rows
    // 
    date_data: {
        '2019-08-02': {
            // your `X`
            feature_1: false,
            feature_2: false,
            feature_3: false,

            // your `y`
            target: true

        },
        '2019-08-03': {
            // your `X`
            feature_1: false,
            feature_2: true,
            feature_3: false,

            // your `y`
            target: true

        },
        '2019-08-04': {
            // your `X`
            feature_1: false,
            feature_2: false,
            feature_3: false,

            // your `y`
            target: true

        },
        '2019-08-05': {
            // your `X`
            feature_1: true,
            feature_2: true,
            feature_3: false,

            // your `y`
            target: false

        },
        '2019-08-06': {
            // your `X`
            feature_1: false,
            feature_2: true,
            feature_3: true,

            // your `y`
            target: true

        },

    },
    all: function () {

        return Object
            .keys(this.date_data)
            .map(date_iso_format => {
                return {
                    date: date_iso_format,
                    ...this.date_data[date_iso_format]
                }
            })

    },
    get: function (date_iso_format) {

        return this.date_data[date_iso_format];
        //======================
        //TODO: instead of storing data client-side (in Javascript), store data server-side
        //======================
        
        //TODO: Use 
        // 1) fetch() to get the data from your FLASK server with a GET request to a URL like "/data";
        // 2) make sure to set up a Flask route which is listening at "/data" , or "/data/<date_iso_format>" 


        // 1) CLIENT SIDE CODE (here in this file)
        //---------------------
        //     fetch(`localhost:<replace_with_your_flask_port_number>/data/${this.props.match.params.date_iso_format}`)
        
        //     .then(response => response.json())
        //     .then(data => this.setState({ data }));
        // }
        
        // 2) CORRESPONDING SERVER SIDE CODE  (in Python; in separate app.py file; run with separate command)
        //---------------------
        // https://flask.palletsprojects.com/en/1.0.x/quickstart/ 

        // For setting up  a route:
        // @app.route('/data/<date_iso_format>')
        // def get_data(date_iso_format):
        //     # show the user profile for that user
        //     # read from python data source; like a DataFrame, or database, 
        //     # or CSV, or even a simple Python dictionary (similar to this  client-side dictionary `this.date_data`)
        //     return python_dictionary_date_data[date_iso_format]
        

    },
    set: function (date_iso_format, new_value) {
        // 
        // add some inputs to the `DayDataForm` component
        // when any of those inputs change, pass a new_value object, which should look like this:
        // {
        //     feature_1: ___,
        //     feature_2: ___,
        //     feature_3, ___,

        //     target
        // }
        this.date_data[date_iso_format] = new_value;

    }
}

export default DataAPI;
