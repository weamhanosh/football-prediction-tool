# football-prediction-tool

To run the tool in docker, navigate to `part3-frontend-and-docker` and run the following command:

```Shell
docker-compose up --build
```

This will run the `train`, `predict` and `frontend` containers sequentially.

Then you can access http://localhost:8080/ via the browser and use the application.

To stop and remove all containers use:

```Shell
docker-compose down
```


Here is an input example you can use:
https://www.fifacm.com/22/player/252371

```JSON
{
    "age": "36",
    "height_cm": "187",
    "weight_kg": "83",
    "body_type_Unique": "1",
    "body_type_Lean": "0",
    "body_type_Stocky": "0",
    "body_type_Normal": "0",
    "nation_rank": "8",
    "international_reputation": "5",
    "preferred_foot_Left": "0",
    "preferred_foot_Right": "1",
    "weak_foot": "4",
    "attacking_work_rate": "3",
    "defending_work_rate": "1",
    "attacker": "1",
    "midfielder": "0",
    "defender": "0",
    "goalkeeper": "0",
    "club_starter": "1",
    "club_substitute": "0",
    "club_reserve": "0",
    "nation_starter": "1",
    "nation_substitute": "0",
    "nation_reserve": "0",
    "overall": "91",
    "potential": "91",
    "pace": "85",
    "shooting": "93",
    "passing": "80",
    "dribbling": "86",
    "defending": "34",
    "physic": "75",
    "attacking_crossing": "84",
    "attacking_finishing": "94",
    "attacking_heading_accuracy": "90",
    "attacking_short_passing": "80",
    "attacking_volleys": "86",
    "skill_dribbling": "86",
    "skill_curve": "81",
    "skill_fk_accuracy": "79",
    "skill_long_passing": "77",
    "skill_ball_control": "88",
    "skill_moves": "5",
    "power_shot_power": "94",
    "power_jumping": "95",
    "power_stamina": "77",
    "power_strength": "77",
    "power_long_shots": "92",
    "movement_acceleration": "82",
    "movement_sprint_speed": "87",
    "movement_agility": "82",
    "movement_reactions": "94",
    "movement_balance": "72",
    "mentality_aggression": "63",
    "mentality_interceptions": "29",
    "mentality_positioning": "95",
    "mentality_vision": "76",
    "mentality_penalties": "90",
    "mentality_composure": "95",
    "defending_marking_awareness": "24",
    "defending_standing_tackle": "32",
    "defending_sliding_tackle": "24",
    "goalkeeping_diving": "7",
    "goalkeeping_handling": "11",
    "goalkeeping_kicking": "15",
    "goalkeeping_positioning": "14",
    "goalkeeping_reflexes": "11",
    "goalkeeping_speed": "0"
}
```