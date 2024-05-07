import numpy as np
import pandas as pd

from utils import get_useless_columns, get_outfield_player_columns, get_positions_mapping, \
    get_playing_statuses_mapping, is_position, playing_status, map_work_rates, get_body_types, get_columns_to_bins


class PrepareData:

    def __init__(self, file_path):
        self.df = pd.read_csv(file_path)

    def clean_data(self):
        # Dropping useless columns
        self.drop_useless_columns()

        # Fill missing values
        self.fill_missing_values()

        # Feature engineering
        self.feature_engineering()

        # Save the cleaned data
        self.save_cleaned_data()

        return self.df

    def drop_useless_columns(self):
        self.df = self.df.drop(columns=get_useless_columns())

    def fill_missing_values(self):
        # Missing values
        # Players with no target value
        print(f"Players with no target value: {len(self.df[self.df['value_eur'].isna()])} out of {len(self.df)}")

        # Dropping players with no target value (value_eur)
        self.df = self.df[~self.df['value_eur'].isna()].reset_index(drop=True)

        # Check for null values
        print(f"Check for null values: {self.df.isnull().sum().sort_values(ascending=False).head(15)}")

        # Filling missing values

        # Set each player who has not been called up to represent the national team as reserve (RES)
        self.df['nation_position'] = np.where(~self.df['nation_position'].isna(), self.df['nation_position'], 'RES')

        # Check if the missing values are for the goalkeepers and the outfield players
        print(f"Check missing values for goalkeepers {(~self.df['goalkeeping_speed'].isna()).sum()}")
        print(f"Check missing values for outfield players {(self.df['goalkeeping_speed'].isna()).sum()}")

        self.fill_goalkeeper_columns()

        # Check for null values
        print(f"Check for null values: {self.df.isnull().sum().sort_values(ascending=False).head(15)}")

    def fill_goalkeeper_columns(self):
        # Fill goalkeepers' outfield columns with 0 instead of NaN
        for col in get_outfield_player_columns():
            self.df[col] = np.where(~self.df[col].isna(), self.df[col], 0)

        # Fill outfield players' goalkeeping_speed column with 0 instead of NaN
        self.df['goalkeeping_speed'] = np.where(~self.df['goalkeeping_speed'].isna(), self.df['goalkeeping_speed'], 0)

    def feature_engineering(self):

        # Replace player_positions with area on the pitch (attacker / midfielder / defender / goalkeeper)
        self.playing_position_feature_engineering()

        # Replace club_position with club_playing_status (starter / reserve)
        self.club_position_feature_engineering()

        # Replace nation_position with nation_playing_status (starter / reserve)
        self.nation_position_feature_engineering()

        # Keep only players with league_level = 1
        self.league_level_feature_engineering()

        # Replace preferred_foot with preferred_foot_Left and preferred_foot_Right
        self.preferred_foot_feature_engineering()

        # Replace work_rate with attacking_work_rate and defending_work_rate
        self.work_rate_feature_engineering()

        # Replace body_type with body_type_Unique, body_type_Lean, body_type_Stocky and body_type_Normal
        self.body_type_feature_engineering()

        # Replace nationality_name with nation_rank (Based on the data in file "fifa_rankings.csv")
        self.nation_rank_feature_engineering()

        # All column values are integers, so we set the dtype as int
        self.df = self.df.astype(int)

        # Reduce all column with values ranging in [0, 100] to 20 bins and also for [height_cm, weight_kg, nation_rank]
        self.reduce_to_bins()

    def playing_position_feature_engineering(self):
        self.position_helper_function(get_positions_mapping(), '', 'player_positions', is_position)

    def club_position_feature_engineering(self):
        self.position_helper_function(get_playing_statuses_mapping(), 'club_', 'club_position', playing_status)

    def nation_position_feature_engineering(self):
        self.position_helper_function(get_playing_statuses_mapping(), 'nation_', 'nation_position', playing_status)

    def position_helper_function(self, mapping, prefix, column_name, func):
        for key, value in mapping.items():
            self.df[prefix + key] = self.df[column_name].apply(lambda x: func(x, value))

        self.df = self.df.drop(columns=[column_name])

    def work_rate_feature_engineering(self):
        self.df['attacking_work_rate'], self.df['defending_work_rate'] = zip(*self.df['work_rate'].map(map_work_rates))
        self.df = self.df.drop(columns=['work_rate'])

    def league_level_feature_engineering(self):
        self.df = self.df[self.df['league_level'].isin([1])]
        self.df = self.df.drop(columns=['league_level']).reset_index(drop=True)

    def preferred_foot_feature_engineering(self):
        self.df = pd.concat([
            self.df,
            pd.get_dummies(self.df['preferred_foot'], prefix='preferred_foot').astype(int)
        ], axis=1)
        self.df = self.df.drop(columns=['preferred_foot'])

    def body_type_feature_engineering(self):
        for body_type in get_body_types():
            self.df[f'body_type_{body_type}'] = self.df['body_type'].str.contains(body_type).astype(int)
        self.df = self.df.drop(columns=['body_type'])

    def nation_rank_feature_engineering(self):
        df_nation_rankings = pd.read_csv('fifa_rankings.csv')
        df_nation_rankings = df_nation_rankings[df_nation_rankings['rank_date'] == '2021-08-12']
        df_nation_rankings = df_nation_rankings[['rank', 'country_full']]
        df_nation_rankings = df_nation_rankings.rename(
            columns={'country_full': 'nationality_name', 'rank': 'nation_rank'})
        self.df = pd.merge(self.df, df_nation_rankings, on='nationality_name', how='left')
        missing_rank_value = self.df['nation_rank'].max() + 1
        self.df['nation_rank'] = self.df['nation_rank'].fillna(missing_rank_value)
        max_rank = self.df['nation_rank'].max()
        self.df['nation_rank'] = max_rank - self.df['nation_rank'] + 1
        self.df['nation_rank'] = self.df['nation_rank'].astype(int)
        self.df = self.df.drop(columns=['nationality_name'])

    def reduce_to_bins(self):
        for col in get_columns_to_bins():
            self.df[col] = pd.cut(self.df[col], bins=20, right=False, include_lowest=True)
            self.df[col] = self.df[col].apply(lambda x: x.left).astype(int)

    def save_cleaned_data(self):
        self.df.to_csv('cleaned_players.csv', index=False)
