import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from sklearn.linear_model import LogisticRegression

from flask import Flask, jsonify #, render_template, redirect
import event_predictor


# Setup
# engine = create_engine("sqlite:///data.sqlite")


# Create our session (link) from Python to the DB
# session = Session(engine)

# Flask setup
app = Flask(__name__)

# temporary_date_data = {
#         '2019-08-02': {
#             'stress': False,
#             'lackSleep': False,
#             'workout': False
#         }
# }

# Routes:
@app.route('/')
def index():
    # event = engine.find_one()
    return #render_template('', event=event_predictor)


@app.route('/data')
def data():
    _df = _df.append(new_observation, ignore_index=True)
    # len(_df)
    # event_data = event_predictor.data()
    # event.update({_df}, event_data, upsert=True)
    return (_df.to_csv)

@app.route('/data/<date_iso_format>')
def get_data(date_iso_format):
    # data_for_that_date = session.query(date_iso_format)
    # data_for_that_date = temporary_date_data[date_iso_format]
    return jsonify(data_for_that_date)


if __name__ == '__main__':
    app.run(debug=True)
