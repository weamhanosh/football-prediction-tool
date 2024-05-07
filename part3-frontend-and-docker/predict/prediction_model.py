import pickle

import numpy as np

from utils import get_overall_players_threshold, get_model_name_top_players, get_model_name_other_players


class PredictionModel:

    def __init__(self, user_input):
        self.overall = int(user_input['overall'])
        self.potential = int(user_input['potential'])
        self.age = int(user_input['age'])
        self.height_cm = int(user_input['height_cm'])
        self.weight_kg = int(user_input['weight_kg'])
        self.weak_foot = int(user_input['weak_foot'])
        self.skill_moves = int(user_input['skill_moves'])
        self.international_reputation = int(user_input['international_reputation'])
        self.pace = int(user_input['pace'])
        self.shooting = int(user_input['shooting'])
        self.passing = int(user_input['passing'])
        self.dribbling = int(user_input['dribbling'])
        self.defending = int(user_input['defending'])
        self.physic = int(user_input['physic'])
        self.attacking_crossing = int(user_input['attacking_crossing'])
        self.attacking_finishing = int(user_input['attacking_finishing'])
        self.attacking_heading_accuracy = int(user_input['attacking_heading_accuracy'])
        self.attacking_short_passing = int(user_input['attacking_short_passing'])
        self.attacking_volleys = int(user_input['attacking_volleys'])
        self.skill_dribbling = int(user_input['skill_dribbling'])
        self.skill_curve = int(user_input['skill_curve'])
        self.skill_fk_accuracy = int(user_input['skill_fk_accuracy'])
        self.skill_long_passing = int(user_input['skill_long_passing'])
        self.skill_ball_control = int(user_input['skill_ball_control'])
        self.movement_acceleration = int(user_input['movement_acceleration'])
        self.movement_sprint_speed = int(user_input['movement_sprint_speed'])
        self.movement_agility = int(user_input['movement_agility'])
        self.movement_reactions = int(user_input['movement_reactions'])
        self.movement_balance = int(user_input['movement_balance'])
        self.power_shot_power = int(user_input['power_shot_power'])
        self.power_jumping = int(user_input['power_jumping'])
        self.power_stamina = int(user_input['power_stamina'])
        self.power_strength = int(user_input['power_strength'])
        self.power_long_shots = int(user_input['power_long_shots'])
        self.mentality_aggression = int(user_input['mentality_aggression'])
        self.mentality_interceptions = int(user_input['mentality_interceptions'])
        self.mentality_positioning = int(user_input['mentality_positioning'])
        self.mentality_vision = int(user_input['mentality_vision'])
        self.mentality_penalties = int(user_input['mentality_penalties'])
        self.mentality_composure = int(user_input['mentality_composure'])
        self.defending_marking_awareness = int(user_input['defending_marking_awareness'])
        self.defending_standing_tackle = int(user_input['defending_standing_tackle'])
        self.defending_sliding_tackle = int(user_input['defending_sliding_tackle'])
        self.goalkeeping_diving = int(user_input['goalkeeping_diving'])
        self.goalkeeping_handling = int(user_input['goalkeeping_handling'])
        self.goalkeeping_kicking = int(user_input['goalkeeping_kicking'])
        self.goalkeeping_positioning = int(user_input['goalkeeping_positioning'])
        self.goalkeeping_reflexes = int(user_input['goalkeeping_reflexes'])
        self.goalkeeping_speed = int(user_input['goalkeeping_speed'])
        self.attacker = int(user_input['attacker'])
        self.midfielder = int(user_input['midfielder'])
        self.defender = int(user_input['defender'])
        self.goalkeeper = int(user_input['goalkeeper'])
        self.club_starter = int(user_input['club_starter'])
        self.club_substitute = int(user_input['club_substitute'])
        self.club_reserve = int(user_input['club_reserve'])
        self.nation_starter = int(user_input['nation_starter'])
        self.nation_substitute = int(user_input['nation_substitute'])
        self.nation_reserve = int(user_input['nation_reserve'])
        self.preferred_foot_Left = int(user_input['preferred_foot_Left'])
        self.preferred_foot_Right = int(user_input['preferred_foot_Right'])
        self.attacking_work_rate = int(user_input['attacking_work_rate'])
        self.defending_work_rate = int(user_input['defending_work_rate'])
        self.body_type_Unique = int(user_input['body_type_Unique'])
        self.body_type_Lean = int(user_input['body_type_Lean'])
        self.body_type_Stocky = int(user_input['body_type_Stocky'])
        self.body_type_Normal = int(user_input['body_type_Normal'])
        self.nation_rank = int(user_input['nation_rank'])

        with open(f"./models/{get_model_name_top_players()}", 'rb') as f:
            self.top_players_model = pickle.load(f)

        with open(f"./models/{get_model_name_other_players()}", 'rb') as f:
            self.other_players_model = pickle.load(f)

    def get_input_array(self):
        return np.array([[
            self.overall,
            self.potential,
            self.age,
            self.height_cm,
            self.weight_kg,
            self.weak_foot,
            self.skill_moves,
            self.international_reputation,
            self.pace,
            self.shooting,
            self.passing,
            self.dribbling,
            self.defending,
            self.physic,
            self.attacking_crossing,
            self.attacking_finishing,
            self.attacking_heading_accuracy,
            self.attacking_short_passing,
            self.attacking_volleys,
            self.skill_dribbling,
            self.skill_curve,
            self.skill_fk_accuracy,
            self.skill_long_passing,
            self.skill_ball_control,
            self.movement_acceleration,
            self.movement_sprint_speed,
            self.movement_agility,
            self.movement_reactions,
            self.movement_balance,
            self.power_shot_power,
            self.power_jumping,
            self.power_stamina,
            self.power_strength,
            self.power_long_shots,
            self.mentality_aggression,
            self.mentality_interceptions,
            self.mentality_positioning,
            self.mentality_vision,
            self.mentality_penalties,
            self.mentality_composure,
            self.defending_marking_awareness,
            self.defending_standing_tackle,
            self.defending_sliding_tackle,
            self.goalkeeping_diving,
            self.goalkeeping_handling,
            self.goalkeeping_kicking,
            self.goalkeeping_positioning,
            self.goalkeeping_reflexes,
            self.goalkeeping_speed,
            self.attacker,
            self.midfielder,
            self.defender,
            self.goalkeeper,
            self.club_starter,
            self.club_substitute,
            self.club_reserve,
            self.nation_starter,
            self.nation_substitute,
            self.nation_reserve,
            self.preferred_foot_Left,
            self.preferred_foot_Right,
            self.attacking_work_rate,
            self.defending_work_rate,
            self.body_type_Unique,
            self.body_type_Lean,
            self.body_type_Stocky,
            self.body_type_Normal,
            self.nation_rank
        ]])

    def predict(self):
        return self.predict_top_players() if self.overall >= get_overall_players_threshold() else \
            self.predict_other_players()

    def predict_top_players(self):
        return np.expm1(self.top_players_model.predict(self.get_input_array()))[0]

    def predict_other_players(self):
        return self.other_players_model.predict(self.get_input_array())[0]
