import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sklearn.linear_model import LogisticRegression

from flask import Flask, jsonify #, render_template, redirect
from event_predictor import new_observation, df


# Setup
# engine = create_engine("sqlite:///data.sqlite")


# Create our session (link) from Python to the DB
# session = Session(engine)

# Flask setup
app = Flask(__name__)

temporary_date_data = {
        '2019-08-02': {
            'stress': False,
            'lackSleep': False,
            'workout': False
        }
}
import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression

num_rows = 100


# def df():
df = pd.DataFrame({
    'stress': np.random.randint(2, size=num_rows),
    'lack_sleep': np.random.randint(2, size=num_rows,),
    'workout': np.random.randint(2, size=num_rows),
    'event': np.random.randint(2, size=num_rows),
})
    # return df



# Routes:
@app.route('/')
def index():
    # event = engine.find_one()
    return 'hi'#render_template('', event=event_predictor)


@app.route('/data')
def data():

    X = df.drop(columns='event')
    y = df['event']

    _clf = LogisticRegression()
    _clf.fit(X, y)
    # len(_df)
    # event_data = event_predictor.data()
    # event.update({_df}, event_data, upsert=True)
    return jsonify({
        'data': df.values.tolist(),
        'score': _clf.score(X, y),
        'coef': _clf.coef_.tolist()


    })
 
@app.route('/data/<date_iso_format>')
def get_data(date_iso_format):

    # df = df.append(new_observation, ignore_index=True)

    # data_for_that_date = session.query(date_iso_format)
    data_for_that_date = temporary_date_data[date_iso_format]
    return jsonify(data_for_that_date)


if __name__ == '__main__':
    app.run(debug=True)
