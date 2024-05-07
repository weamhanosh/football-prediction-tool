import os
import pickle

import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.metrics import mean_absolute_percentage_error, r2_score
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
from xgboost import XGBRegressor

from data import PrepareData
from constants import cleaned_players_file_name, players_file_name, top_players_random_state, \
    other_players_random_state, overall_players_threshold, target_column_name, test_size, model_name_top_players, \
    model_name_other_players


def get_cleaned_players_data():
    if os.path.exists(cleaned_players_file_name):
        return pd.read_csv(cleaned_players_file_name)
    else:
        data = PrepareData(players_file_name)
        return data.clean_data()


def get_overall_players_threshold():
    return overall_players_threshold


def get_target_column_name():
    return target_column_name


def get_test_size():
    return test_size


# The target column has exponential distribution, thus it's wrapped with np.log1p(y)
def get_target_column_random_state(description, y):
    return (np.log1p(y), top_players_random_state) if description == 'top_players' else \
        (y, other_players_random_state)


# Models list
def get_models():
    return [DecisionTreeRegressor(), RandomForestRegressor(), XGBRegressor(), GradientBoostingRegressor()]


# Run the models and return the best one according to its test score
def train_and_eval(description, X_train, X_test, y_train, y_test, verbose):
    best_model = None
    best_model_test_score = -1

    models = get_models()

    for model in models:

        model.fit(X_train, y_train)

        model_test_score = model.score(X_test, y_test)

        if model_test_score > best_model_test_score:
            best_model_test_score = model_test_score
            best_model = model

        if verbose:
            model_name = model.__class__.__name__
            print(f"{model_name} test score {model_test_score}")
            mape, r_squared, adjusted_r_squared = get_metrics(description, model, X_train, X_test, y_test)
            print("MAPE:", mape)
            print("R-squared:", r_squared)
            print("Adjusted R-squared:", adjusted_r_squared)
            print("\n")

    return best_model


# Run the models and set the models_dict according to the best_model
def run_models(description, df, verbose, models_dict):
    train_df = df.drop(columns=[get_target_column_name()], axis=1)

    target_column, random_state = get_target_column_random_state(description, df[get_target_column_name()])

    X_train, X_test, y_train, y_test = train_test_split(train_df, target_column, test_size=get_test_size(),
                                                        random_state=random_state)

    print(f"Running models for {description}\n")
    best_model = train_and_eval(description, X_train, X_test, y_train, y_test, verbose)
    best_model_test_score = best_model.score(X_test, y_test)

    if best_model_test_score > models_dict[description]['best_model_test_score']:
        models_dict[description]['best_model'] = best_model
        models_dict[description]['best_model_train_score'] = best_model.score(X_train, y_train)
        models_dict[description]['best_model_test_score'] = best_model_test_score

        models_dict[description]['best_model_random_state'] = random_state

        mape, r_squared, adjusted_r_squared = get_metrics(description, best_model, X_train, X_test, y_test)
        models_dict[description]['best_model_mape'] = mape
        models_dict[description]['best_model_r_squared'] = r_squared
        models_dict[description]['best_model_adjusted_r_squared'] = adjusted_r_squared


# Get the mape, r_squared and adjusted_r_squared scores
def get_metrics(description, model, X_train, X_test, y_test):
    adjusted_y_test = np.expm1(y_test) if description == 'top_players' else y_test

    pred = model.predict(X_test)
    adjusted_pred = np.expm1(pred) if description == 'top_players' else pred

    mape = mean_absolute_percentage_error(adjusted_y_test, adjusted_pred)
    r_squared = r2_score(adjusted_y_test, adjusted_pred)
    num_predictors = X_train.shape[1]
    sample_size = X_train.shape[0]
    adjusted_r_squared = 1 - (1 - r_squared) * ((sample_size - 1) / (sample_size - num_predictors - 1))

    return mape, r_squared, adjusted_r_squared


def get_model_name_top_players():
    return model_name_top_players


def get_model_name_other_players():
    return model_name_other_players


def save_model(model, model_name):
    with open(f"/train/models/{model_name}", "wb") as f:
        pickle.dump(model, f)
