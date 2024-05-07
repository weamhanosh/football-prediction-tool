import {useQuery} from 'react-query';
import {useRecoilState} from 'recoil';
import request from '../axios-utils';
import {
    ageState,
    attacking_crossingState,
    attacking_finishingState,
    attacking_heading_accuracyState,
    attacking_short_passingState,
    attacking_volleysState,
    attackingWorkRateState,
    bodyTypeState,
    clubPlayingStatusState,
    defending_marking_awarenessState,
    defending_sliding_tackleState,
    defending_standing_tackleState,
    defendingState,
    defendingWorkRateState,
    dribblingState,
    goalkeeping_divingState,
    goalkeeping_handlingState,
    goalkeeping_kickingState,
    goalkeeping_positioningState,
    goalkeeping_reflexesState,
    goalkeeping_speedState,
    heightState,
    international_reputationState,
    mentality_aggressionState,
    mentality_composureState,
    mentality_interceptionsState,
    mentality_penaltiesState,
    mentality_positioningState,
    mentality_visionState,
    movement_accelerationState,
    movement_agilityState,
    movement_balanceState,
    movement_reactionsState,
    movement_sprint_speedState, nation_rankState,
    nationPlayingStatusState,
    overallState,
    paceState,
    passingState,
    physicState,
    positionState,
    potentialState,
    power_jumpingState,
    power_long_shotsState,
    power_shot_powerState,
    power_staminaState,
    power_strengthState,
    preferredFootState,
    shootingState,
    skill_ball_controlState,
    skill_curveState,
    skill_dribblingState,
    skill_fk_accuracyState,
    skill_long_passingState,
    skillMovesState,
    weakFootState,
    weightState
} from "../../atoms/index.js"

const usePredict = () => {
    const [overall] = useRecoilState(overallState);
    const [potential] = useRecoilState(potentialState);
    const [pace] = useRecoilState(paceState);
    const [shooting] = useRecoilState(shootingState);
    const [passing] = useRecoilState(passingState);
    const [dribbling] = useRecoilState(dribblingState);
    const [defending] = useRecoilState(defendingState);
    const [physic] = useRecoilState(physicState);
    const [attacking_crossing] = useRecoilState(attacking_crossingState);
    const [attacking_finishing] = useRecoilState(attacking_finishingState);
    const [attacking_heading_accuracy] = useRecoilState(attacking_heading_accuracyState);
    const [attacking_short_passing] = useRecoilState(attacking_short_passingState);
    const [attacking_volleys] = useRecoilState(attacking_volleysState);
    const [skill_dribbling] = useRecoilState(skill_dribblingState);
    const [skill_curve] = useRecoilState(skill_curveState);
    const [skill_fk_accuracy] = useRecoilState(skill_fk_accuracyState);
    const [skill_long_passing] = useRecoilState(skill_long_passingState);
    const [skill_ball_control] = useRecoilState(skill_ball_controlState);
    const [movement_acceleration] = useRecoilState(movement_accelerationState);
    const [movement_sprint_speed] = useRecoilState(movement_sprint_speedState);
    const [movement_agility] = useRecoilState(movement_agilityState);
    const [movement_reactions] = useRecoilState(movement_reactionsState);
    const [movement_balance] = useRecoilState(movement_balanceState);
    const [power_shot_power] = useRecoilState(power_shot_powerState);
    const [power_jumping] = useRecoilState(power_jumpingState);
    const [power_stamina] = useRecoilState(power_staminaState);
    const [power_strength] = useRecoilState(power_strengthState);
    const [power_long_shots] = useRecoilState(power_long_shotsState);
    const [mentality_aggression] = useRecoilState(mentality_aggressionState);
    const [mentality_interceptions] = useRecoilState(mentality_interceptionsState);
    const [mentality_positioning] = useRecoilState(mentality_positioningState);
    const [mentality_vision] = useRecoilState(mentality_visionState);
    const [mentality_penalties] = useRecoilState(mentality_penaltiesState);
    const [mentality_composure] = useRecoilState(mentality_composureState);
    const [defending_marking_awareness] = useRecoilState(defending_marking_awarenessState);
    const [defending_standing_tackle] = useRecoilState(defending_standing_tackleState);
    const [defending_sliding_tackle] = useRecoilState(defending_sliding_tackleState);
    const [goalkeeping_diving] = useRecoilState(goalkeeping_divingState);
    const [goalkeeping_handling] = useRecoilState(goalkeeping_handlingState);
    const [goalkeeping_kicking] = useRecoilState(goalkeeping_kickingState);
    const [goalkeeping_positioning] = useRecoilState(goalkeeping_positioningState);
    const [goalkeeping_reflexes] = useRecoilState(goalkeeping_reflexesState);
    const [goalkeeping_speed] = useRecoilState(goalkeeping_speedState);
    const [position] = useRecoilState(positionState);
    const [clubPlayingStatus] = useRecoilState(clubPlayingStatusState);
    const [nationPlayingStatus] = useRecoilState(nationPlayingStatusState);
    const [preferredFoot] = useRecoilState(preferredFootState);
    const [attackingWorkRate] = useRecoilState(attackingWorkRateState);
    const [defendingWorkRate] = useRecoilState(defendingWorkRateState);
    const [bodyType] = useRecoilState(bodyTypeState);
    const [age] = useRecoilState(ageState);
    const [height] = useRecoilState(heightState);
    const [weight] = useRecoilState(weightState);
    const [weakFoot] = useRecoilState(weakFootState);
    const [skillMoves] = useRecoilState(skillMovesState);
    const [international_reputation] = useRecoilState(international_reputationState);
    const [nation_rank] = useRecoilState(nation_rankState);

    return useQuery({
                        queryKey: ['count'],
                        queryFn: () =>
                            request({
                                        url: "/predict",
                                        method: 'post',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        data: {
                                            overall: overall,
                                            potential: potential,
                                            pace: pace,
                                            shooting: shooting,
                                            passing: passing,
                                            dribbling: dribbling,
                                            defending: defending,
                                            physic: physic,
                                            attacking_crossing: attacking_crossing,
                                            attacking_finishing: attacking_finishing,
                                            attacking_heading_accuracy: attacking_heading_accuracy,
                                            attacking_short_passing: attacking_short_passing,
                                            attacking_volleys: attacking_volleys,
                                            skill_dribbling: skill_dribbling,
                                            skill_curve: skill_curve,
                                            skill_fk_accuracy: skill_fk_accuracy,
                                            skill_long_passing: skill_long_passing,
                                            skill_ball_control: skill_ball_control,
                                            movement_acceleration: movement_acceleration,
                                            movement_sprint_speed: movement_sprint_speed,
                                            movement_agility: movement_agility,
                                            movement_reactions: movement_reactions,
                                            movement_balance: movement_balance,
                                            power_shot_power: power_shot_power,
                                            power_jumping: power_jumping,
                                            power_stamina: power_stamina,
                                            power_strength: power_strength,
                                            power_long_shots: power_long_shots,
                                            mentality_aggression: mentality_aggression,
                                            mentality_interceptions: mentality_interceptions,
                                            mentality_positioning: mentality_positioning,
                                            mentality_vision: mentality_vision,
                                            mentality_penalties: mentality_penalties,
                                            mentality_composure: mentality_composure,
                                            defending_marking_awareness: defending_marking_awareness,
                                            defending_standing_tackle: defending_standing_tackle,
                                            defending_sliding_tackle: defending_sliding_tackle,
                                            goalkeeping_diving: goalkeeping_diving,
                                            goalkeeping_handling: goalkeeping_handling,
                                            goalkeeping_kicking: goalkeeping_kicking,
                                            goalkeeping_positioning: goalkeeping_positioning,
                                            goalkeeping_reflexes: goalkeeping_reflexes,
                                            goalkeeping_speed: goalkeeping_speed,
                                            attacker: +(position === "attacker"),
                                            midfielder: +(position === "midfielder"),
                                            defender: +(position === "defender"),
                                            goalkeeper: +(position === "goalkeeper"),
                                            club_starter: +(clubPlayingStatus === "starter"),
                                            club_substitute: +(clubPlayingStatus === "substitute"),
                                            club_reserve: +(clubPlayingStatus === "reserve"),
                                            nation_starter: +(nationPlayingStatus === "starter"),
                                            nation_substitute: +(nationPlayingStatus === "substitute"),
                                            nation_reserve: +(nationPlayingStatus === "reserve"),
                                            preferred_foot_Left: +(preferredFoot === "left"),
                                            preferred_foot_Right: +(preferredFoot === "right"),
                                            attacking_work_rate: attackingWorkRate === "low" ? 1 : attackingWorkRate === "medium" ? 2 : 3,
                                            defending_work_rate: defendingWorkRate === "low" ? 1 : defendingWorkRate === "medium" ? 2 : 3,
                                            body_type_Unique: +(bodyType === "unique"),
                                            body_type_Lean: +(bodyType === "lean"),
                                            body_type_Normal: +(bodyType === "normal"),
                                            body_type_Stocky: +(bodyType === "stocky"),
                                            age: age,
                                            height_cm: height,
                                            weight_kg: weight,
                                            weak_foot: weakFoot,
                                            skill_moves: skillMoves,
                                            international_reputation: international_reputation,
                                            nation_rank: nation_rank.value
                                        },
                                    }),
                        enabled: false,
                    });
};

export default usePredict;
