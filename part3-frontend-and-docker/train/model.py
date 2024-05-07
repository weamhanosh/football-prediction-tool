from utils import run_models, save_model, get_overall_players_threshold, get_model_name_top_players, \
    get_model_name_other_players


class Model:
    def __init__(self, df):

        # Define the dictionaries for saving the best models
        self.df_dict = {
            'top_players': df[df['overall'] >= get_overall_players_threshold()],
            'other_players': df[df['overall'] < get_overall_players_threshold()]
        }

        self.best_models_dict = {
            'top_players': {
                'best_model': None,
                'best_model_train_score': -1,
                'best_model_test_score': -1,
                'best_model_random_state': -1
            },
            'other_players': {
                'best_model': None,
                'best_model_train_score': -1,
                'best_model_test_score': -1,
                'best_model_random_state': -1
            }
        }

    def train_models(self, verbose=None):
        # Run the models and print the best results
        for description, df in self.df_dict.items():
            run_models(description, df, verbose, self.best_models_dict)

        for description in self.df_dict.keys():
            print(f"Best results for {description}:")
            for key, value in self.best_models_dict[description].items():
                print(f"{key}: {value}")
            print("\n")

        # Save the best_models into .pkl files
        save_model(self.best_models_dict['top_players']['best_model'], get_model_name_top_players())
        save_model(self.best_models_dict['other_players']['best_model'], get_model_name_other_players())

        return self.best_models_dict['top_players']['best_model'], self.best_models_dict['other_players']['best_model']
