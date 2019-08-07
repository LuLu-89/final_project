import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression

num_rows = 100

_df = pd.DataFrame({
    'stress': np.random.randint(2, size=num_rows),
    'lack_sleep': np.random.randint(2, size=num_rows,),
    'workout': np.random.randint(2, size=num_rows),
    'event': np.random.randint(2, size=num_rows),
})

# title Enter an event for some day
event_date = "2019-07-20"  # param {type:"date"}
stress_bool = True  # param {type:"boolean"}
sleep_bool = False  # param {type:"boolean"}
workout_bool = True  # param {type:"boolean"}
# markdown ------------
event_bool = False  # param {type:"boolean"}


new_observation = {
    'stress': stressed_bool,
    'lack_sleep': sleep_bool,
    'workout': workout_bool,
    #################
    'event': event_bool

    _X = _df.drop(columns='event')
    _y = _df['event']

    _clf = LogisticRegression()
    _clf.fit(_X, _y)
    print(f'Impact of stress, sleep, and working out:{_clf.coef_[0]}')




