import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


# Setup
engine = create_engine("sqlite:///data.sqlite")


# Create our session (link) from Python to the DB
session = Session(engine)

# Flask setup
app = Flask(__name__)

# Routes:
@app.route('/')
def index():
    return 'Hello welcome to Lucys app'

@app.route('/data')
def data():
    return 'Select a date'

@app.route('/data/<date_iso_format>')
def get_data(date_iso_format):
    data_for_that_date = session.query(date_iso_format)
    # data_for_that_date = temporary_date_data[date_iso_format]
    return jsonify(list(data_for_that_date))


if __name__ == '__main__':
    app.run(debug=True)
