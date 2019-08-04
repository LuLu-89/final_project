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

# Route to Data page only
@app.route('/data')
def data():
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
