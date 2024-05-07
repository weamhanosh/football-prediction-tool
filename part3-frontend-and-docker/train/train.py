from model import Model
from utils import get_cleaned_players_data

if __name__ == '__main__':
    df_cleaned_players = get_cleaned_players_data()
    model = Model(df_cleaned_players)
    best_model_top_players, best_model_other_players = model.train_models(verbose=1)
