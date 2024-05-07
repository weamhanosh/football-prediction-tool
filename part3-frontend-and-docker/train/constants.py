
players_file_name = "players.csv"
cleaned_players_file_name = "cleaned_players.csv"


useless_columns = [
    'sofifa_id', 'player_url', 'short_name', 'long_name', 'wage_eur', 'dob', 'club_team_id', 'club_name',
    'league_name', 'club_jersey_number', 'club_loaned_from', 'club_joined', 'club_contract_valid_until',
    'nationality_id', 'nation_team_id', 'nation_jersey_number', 'real_face', 'release_clause_eur', 'player_tags',
    'player_traits', 'ls', 'st', 'rs', 'lw', 'lf', 'cf', 'rf', 'rw', 'lam', 'cam', 'ram', 'lm', 'lcm', 'cm', 'rcm',
    'rm', 'lwb', 'ldm', 'cdm', 'rdm', 'rwb', 'lb', 'lcb', 'cb', 'rcb', 'rb', 'gk', 'player_face_url', 'club_logo_url',
    'club_flag_url', 'nation_logo_url', 'nation_flag_url']

outfield_player_columns = ['pace', 'shooting', 'passing', 'dribbling', 'defending', 'physic']

positions_mapping = {
    'attacker': ['LS', 'ST', 'RS', 'LW', 'LF', 'CF', 'RF', 'RW'],
    'midfielder': ['LAM', 'CAM', 'RAM', 'LM', 'LCM', 'CM', 'RCM', 'RM'],
    'defender': ['LWB', 'LDM', 'CDM', 'RDM', 'RWB', 'LB', 'LCB', 'CB', 'RCB', 'RB'],
    'goalkeeper': ['GK']
}

playing_statuses_mapping = {
    'starter': [pos for sublist in positions_mapping.values() for pos in sublist],
    'substitute': ['SUB'],
    'reserve': ['RES']
}

work_rate_mapping = {'High': 3, 'Medium': 2, 'Low': 1}

body_types = ['Unique', 'Lean', 'Stocky', 'Normal']

columns_to_bins = [
    'overall', 'potential', 'height_cm', 'weight_kg', 'pace', 'shooting', 'passing', 'dribbling', 'defending', 'physic',
    'attacking_crossing', 'attacking_finishing', 'attacking_heading_accuracy', 'attacking_short_passing',
    'attacking_volleys', 'skill_dribbling', 'skill_curve', 'skill_fk_accuracy', 'skill_long_passing',
    'skill_ball_control', 'movement_acceleration', 'movement_sprint_speed', 'movement_agility', 'movement_reactions',
    'movement_balance', 'power_shot_power', 'power_jumping', 'power_stamina', 'power_strength', 'power_long_shots',
    'mentality_aggression', 'mentality_interceptions', 'mentality_positioning', 'mentality_vision',
    'mentality_penalties', 'mentality_composure', 'defending_marking_awareness', 'defending_standing_tackle',
    'defending_sliding_tackle', 'goalkeeping_diving', 'goalkeeping_handling', 'goalkeeping_kicking',
    'goalkeeping_positioning', 'goalkeeping_reflexes', 'goalkeeping_speed', 'nation_rank']


target_column_name = 'value_eur'
test_size = 0.25
overall_players_threshold = 70
top_players_random_state = 897
other_players_random_state = 386

model_name_top_players = 'best_model_top_players.pkl'
model_name_other_players = 'best_model_other_players.pkl'
