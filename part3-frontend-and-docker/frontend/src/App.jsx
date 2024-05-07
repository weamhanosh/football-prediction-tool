import './App.css'
import NumericInput from "./components/NumericInput.jsx"
import Header from "./components/Header.jsx"
import {useRecoilState} from "recoil"
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
    movement_sprint_speedState,
    nation_rankState,
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
    predictionState,
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
} from "./atoms/index.js"
import {
    Autocomplete,
    Button,
    createFilterOptions,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography
} from "@mui/material"
import usePredict from "./api/hooks/usePredict.js"

function App() {
    const {refetch: refetchPredict} = usePredict();
    const [overall, setOverall] = useRecoilState(overallState);
    const [potential, setPotential] = useRecoilState(potentialState);
    const [pace, setPace] = useRecoilState(paceState);
    const [shooting, setShooting] = useRecoilState(shootingState);
    const [passing, setPassing] = useRecoilState(passingState);
    const [dribbling, setDribbling] = useRecoilState(dribblingState);
    const [defending, setDefending] = useRecoilState(defendingState);
    const [physic, setPhysic] = useRecoilState(physicState);
    const [attacking_crossing, setAttacking_crossing] = useRecoilState(attacking_crossingState);
    const [attacking_finishing, setAttacking_finishing] = useRecoilState(attacking_finishingState);
    const [attacking_heading_accuracy, setAttacking_heading_accuracy] = useRecoilState(attacking_heading_accuracyState);
    const [attacking_short_passing, setAttacking_short_passing] = useRecoilState(attacking_short_passingState);
    const [attacking_volleys, setAttacking_volleys] = useRecoilState(attacking_volleysState);
    const [skill_dribbling, setSkill_dribbling] = useRecoilState(skill_dribblingState);
    const [skill_curve, setSkill_curve] = useRecoilState(skill_curveState);
    const [skill_fk_accuracy, setSkill_fk_accuracy] = useRecoilState(skill_fk_accuracyState);
    const [skill_long_passing, setSkill_long_passing] = useRecoilState(skill_long_passingState);
    const [skill_ball_control, setSkill_ball_control] = useRecoilState(skill_ball_controlState);
    const [movement_acceleration, setMovement_acceleration] = useRecoilState(movement_accelerationState);
    const [movement_sprint_speed, setMovement_sprint_speed] = useRecoilState(movement_sprint_speedState);
    const [movement_agility, setMovement_agility] = useRecoilState(movement_agilityState);
    const [movement_reactions, setMovement_reactions] = useRecoilState(movement_reactionsState);
    const [movement_balance, setMovement_balance] = useRecoilState(movement_balanceState);
    const [power_shot_power, setPower_shot_power] = useRecoilState(power_shot_powerState);
    const [power_jumping, setPower_jumping] = useRecoilState(power_jumpingState);
    const [power_stamina, setPower_stamina] = useRecoilState(power_staminaState);
    const [power_strength, setPower_strength] = useRecoilState(power_strengthState);
    const [power_long_shots, setPower_long_shots] = useRecoilState(power_long_shotsState);
    const [mentality_aggression, setMentality_aggression] = useRecoilState(mentality_aggressionState);
    const [mentality_interceptions, setMentality_interceptions] = useRecoilState(mentality_interceptionsState);
    const [mentality_positioning, setMentality_positioning] = useRecoilState(mentality_positioningState);
    const [mentality_vision, setMentality_vision] = useRecoilState(mentality_visionState);
    const [mentality_penalties, setMentality_penalties] = useRecoilState(mentality_penaltiesState);
    const [mentality_composure, setMentality_composure] = useRecoilState(mentality_composureState);
    const [defending_marking_awareness, setDefending_marking_awareness] = useRecoilState(
        defending_marking_awarenessState);
    const [defending_standing_tackle, setDefending_standing_tackle] = useRecoilState(defending_standing_tackleState);
    const [defending_sliding_tackle, setDefending_sliding_tackle] = useRecoilState(defending_sliding_tackleState);
    const [goalkeeping_diving, setGoalkeeping_diving] = useRecoilState(goalkeeping_divingState);
    const [goalkeeping_handling, setGoalkeeping_handling] = useRecoilState(goalkeeping_handlingState);
    const [goalkeeping_kicking, setGoalkeeping_kicking] = useRecoilState(goalkeeping_kickingState);
    const [goalkeeping_positioning, setGoalkeeping_positioning] = useRecoilState(goalkeeping_positioningState);
    const [goalkeeping_reflexes, setGoalkeeping_reflexes] = useRecoilState(goalkeeping_reflexesState);
    const [goalkeeping_speed, setGoalkeeping_speed] = useRecoilState(goalkeeping_speedState);
    const [position, setPosition] = useRecoilState(positionState);
    const [clubPlayingStatus, setClubPlayingStatus] = useRecoilState(clubPlayingStatusState);
    const [nationPlayingStatus, setNationPlayingStatus] = useRecoilState(nationPlayingStatusState);
    const [preferredFoot, setPreferredFoot] = useRecoilState(preferredFootState);
    const [attackingWorkRate, setAttackingWorkRate] = useRecoilState(attackingWorkRateState);
    const [defendingWorkRate, setDefendingWorkRate] = useRecoilState(defendingWorkRateState);
    const [bodyType, setBodyType] = useRecoilState(bodyTypeState);
    const [age, setAge] = useRecoilState(ageState);
    const [height, setHeight] = useRecoilState(heightState);
    const [weight, setWeight] = useRecoilState(weightState);
    const [weakFoot, setWeakFoot] = useRecoilState(weakFootState);
    const [skillMoves, setSkillMoves] = useRecoilState(skillMovesState);
    const [international_reputation, setInternational_reputation] = useRecoilState(international_reputationState);
    const [nation_rank, setNation_rank] = useRecoilState(nation_rankState);
    const [prediction, setPrediction] = useRecoilState(predictionState);

    const nationsArray = [{"value": "153", "label": "Afghanistan"}, {"value": "69", "label": "Albania"},
        {"value": "30", "label": "Algeria"}, {"value": "192", "label": "American Samoa"},
        {"value": "156", "label": "Andorra"}, {"value": "126", "label": "Angola"},
        {"value": "210", "label": "Anguilla"}, {"value": "129", "label": "Antigua and Barbuda"},
        {"value": "6", "label": "Argentina"}, {"value": "88", "label": "Armenia"}, {"value": "201", "label": "Aruba"},
        {"value": "35", "label": "Australia"}, {"value": "23", "label": "Austria"},
        {"value": "112", "label": "Azerbaijan"}, {"value": "202", "label": "Bahamas"},
        {"value": "94", "label": "Bahrain"}, {"value": "188", "label": "Bangladesh"},
        {"value": "162", "label": "Barbados"}, {"value": "89", "label": "Belarus"}, {"value": "1", "label": "Belgium"},
        {"value": "169", "label": "Belize"}, {"value": "86", "label": "Benin"}, {"value": "166", "label": "Bermuda"},
        {"value": "187", "label": "Bhutan"}, {"value": "82", "label": "Bolivia"},
        {"value": "58", "label": "Bosnia and Herzegovina"}, {"value": "149", "label": "Botswana"},
        {"value": "2", "label": "Brazil"}, {"value": "208", "label": "British Virgin Islands"},
        {"value": "190", "label": "Brunei Darussalam"}, {"value": "75", "label": "Bulgaria"},
        {"value": "62", "label": "Burkina Faso"}, {"value": "140", "label": "Burundi"},
        {"value": "77", "label": "Cabo Verde"}, {"value": "179", "label": "Cambodia"},
        {"value": "54", "label": "Cameroon"}, {"value": "59", "label": "Canada"},
        {"value": "197", "label": "Cayman Islands"}, {"value": "123", "label": "Central African Republic"},
        {"value": "181", "label": "Chad"}, {"value": "20", "label": "Chile"}, {"value": "71", "label": "China PR"},
        {"value": "151", "label": "Chinese Taipei"}, {"value": "15", "label": "Colombia"},
        {"value": "133", "label": "Comoros"}, {"value": "93", "label": "Congo"}, {"value": "65", "label": "Congo DR"},
        {"value": "44", "label": "Costa Rica"}, {"value": "18", "label": "Croatia"}, {"value": "180", "label": "Cuba"},
        {"value": "78", "label": "Curaçao"}, {"value": "99", "label": "Cyprus"},
        {"value": "31", "label": "Czech Republic"}, {"value": "57", "label": "Côte d'Ivoire"},
        {"value": "11", "label": "Denmark"}, {"value": "182", "label": "Djibouti"},
        {"value": "184", "label": "Dominica"}, {"value": "157", "label": "Dominican Republic"},
        {"value": "55", "label": "Ecuador"}, {"value": "46", "label": "Egypt"}, {"value": "64", "label": "El Salvador"},
        {"value": "4", "label": "England"}, {"value": "132", "label": "Equatorial Guinea"},
        {"value": "204", "label": "Eritrea"}, {"value": "110", "label": "Estonia"},
        {"value": "146", "label": "Eswatini"}, {"value": "137", "label": "Ethiopia"},
        {"value": "114", "label": "Faroe Islands"}, {"value": "161", "label": "Fiji"},
        {"value": "56", "label": "Finland"}, {"value": "3", "label": "France"}, {"value": "85", "label": "Gabon"},
        {"value": "148", "label": "Gambia"}, {"value": "91", "label": "Georgia"}, {"value": "16", "label": "Germany"},
        {"value": "52", "label": "Ghana"}, {"value": "194", "label": "Gibraltar"}, {"value": "48", "label": "Greece"},
        {"value": "167", "label": "Grenada"}, {"value": "203", "label": "Guam"}, {"value": "125", "label": "Guatemala"},
        {"value": "76", "label": "Guinea"}, {"value": "109", "label": "Guinea-Bissau"},
        {"value": "173", "label": "Guyana"}, {"value": "90", "label": "Haiti"}, {"value": "63", "label": "Honduras"},
        {"value": "147", "label": "Hong Kong"}, {"value": "37", "label": "Hungary"},
        {"value": "53", "label": "Iceland"}, {"value": "105", "label": "India"}, {"value": "174", "label": "Indonesia"},
        {"value": "26", "label": "IR Iran"}, {"value": "70", "label": "Iraq"}, {"value": "81", "label": "Israel"},
        {"value": "5", "label": "Italy"}, {"value": "50", "label": "Jamaica"}, {"value": "24", "label": "Japan"},
        {"value": "95", "label": "Jordan"}, {"value": "124", "label": "Kazakhstan"}, {"value": "104", "label": "Kenya"},
        {"value": "111", "label": "Korea DPR"}, {"value": "36", "label": "Korea Republic"},
        {"value": "115", "label": "Kosovo"}, {"value": "142", "label": "Kuwait"},
        {"value": "101", "label": "Kyrgyz Republic"}, {"value": "186", "label": "Laos"},
        {"value": "136", "label": "Latvia"}, {"value": "98", "label": "Lebanon"}, {"value": "144", "label": "Lesotho"},
        {"value": "150", "label": "Liberia"}, {"value": "122", "label": "Libya"},
        {"value": "189", "label": "Liechtenstein"}, {"value": "134", "label": "Lithuania"},
        {"value": "96", "label": "Luxembourg"}, {"value": "183", "label": "Macau"},
        {"value": "97", "label": "Madagascar"}, {"value": "118", "label": "Malawi"},
        {"value": "154", "label": "Malaysia"}, {"value": "158", "label": "Maldives"}, {"value": "60", "label": "Mali"},
        {"value": "177", "label": "Malta"}, {"value": "100", "label": "Mauritania"},
        {"value": "170", "label": "Mauritius"}, {"value": "9", "label": "Mexico"}, {"value": "175", "label": "Moldova"},
        {"value": "185", "label": "Mongolia"}, {"value": "67", "label": "Montenegro"},
        {"value": "178", "label": "Montserrat"}, {"value": "32", "label": "Morocco"},
        {"value": "113", "label": "Mozambique"}, {"value": "145", "label": "Myanmar"},
        {"value": "107", "label": "Namibia"}, {"value": "168", "label": "Nepal"},
        {"value": "12", "label": "Netherlands"}, {"value": "155", "label": "New Caledonia"},
        {"value": "119", "label": "New Zealand"}, {"value": "143", "label": "Nicaragua"},
        {"value": "117", "label": "Niger"}, {"value": "34", "label": "Nigeria"},
        {"value": "72", "label": "North Macedonia"}, {"value": "51", "label": "Northern Ireland"},
        {"value": "43", "label": "Norway"}, {"value": "79", "label": "Oman"}, {"value": "198", "label": "Pakistan"},
        {"value": "102", "label": "Palestine"}, {"value": "74", "label": "Panama"},
        {"value": "164", "label": "Papua New Guinea"}, {"value": "33", "label": "Paraguay"},
        {"value": "22", "label": "Peru"}, {"value": "128", "label": "Philippines"}, {"value": "27", "label": "Poland"},
        {"value": "8", "label": "Portugal"}, {"value": "171", "label": "Puerto Rico"},
        {"value": "42", "label": "Qatar"}, {"value": "47", "label": "Republic of Ireland"},
        {"value": "45", "label": "Romania"}, {"value": "41", "label": "Russia"}, {"value": "127", "label": "Rwanda"},
        {"value": "193", "label": "Samoa"}, {"value": "209", "label": "San Marino"},
        {"value": "61", "label": "Saudi Arabia"}, {"value": "49", "label": "Scotland"},
        {"value": "21", "label": "Senegal"}, {"value": "29", "label": "Serbia"},
        {"value": "199", "label": "Seychelles"}, {"value": "106", "label": "Sierra Leone"},
        {"value": "160", "label": "Singapore"}, {"value": "38", "label": "Slovakia"},
        {"value": "66", "label": "Slovenia"}, {"value": "141", "label": "Solomon Islands"},
        {"value": "196", "label": "Somalia"}, {"value": "73", "label": "South Africa"},
        {"value": "165", "label": "South Sudan"}, {"value": "7", "label": "Spain"},
        {"value": "205", "label": "Sri Lanka"}, {"value": "138", "label": "St. Kitts and Nevis"},
        {"value": "176", "label": "St. Lucia"}, {"value": "172", "label": "St. Vincent and the Grenadines"},
        {"value": "121", "label": "Sudan"}, {"value": "139", "label": "Suriname"}, {"value": "17", "label": "Sweden"},
        {"value": "14", "label": "Switzerland"}, {"value": "80", "label": "Syria"},
        {"value": "191", "label": "São Tomé and Príncipe"}, {"value": "159", "label": "Tahiti"},
        {"value": "116", "label": "Tajikistan"}, {"value": "135", "label": "Tanzania"},
        {"value": "120", "label": "Thailand"}, {"value": "195", "label": "Timor-Leste"},
        {"value": "131", "label": "Togo"}, {"value": "200", "label": "Tonga"},
        {"value": "103", "label": "Trinidad and Tobago"}, {"value": "28", "label": "Tunisia"},
        {"value": "39", "label": "Turkey"}, {"value": "130", "label": "Turkmenistan"},
        {"value": "206", "label": "Turks and Caicos Islands"}, {"value": "84", "label": "Uganda"},
        {"value": "25", "label": "Ukraine"}, {"value": "68", "label": "United Arab Emirates"},
        {"value": "13", "label": "Uruguay"}, {"value": "207", "label": "US Virgin Islands"},
        {"value": "10", "label": "USA"}, {"value": "83", "label": "Uzbekistan"}, {"value": "163", "label": "Vanuatu"},
        {"value": "40", "label": "Venezuela"}, {"value": "92", "label": "Vietnam"}, {"value": "19", "label": "Wales"},
        {"value": "152", "label": "Yemen"}, {"value": "87", "label": "Zambia"}, {"value": "108", "label": "Zimbabwe"}];

    let disabled = overall === '' || potential === '' || pace === '' || shooting === '' || passing === '' || dribbling
                   === '' || defending === '' || physic === '' || attacking_crossing === '' || attacking_finishing
                   === '' || attacking_heading_accuracy === '' || attacking_short_passing === '' || attacking_volleys
                   === '' || skill_dribbling === '' || skill_curve === '' || skill_fk_accuracy === ''
                   || skill_long_passing === '' || skill_ball_control === '' || movement_acceleration === ''
                   || movement_sprint_speed === '' || movement_agility === '' || movement_reactions === ''
                   || movement_balance === '' || power_shot_power === '' || power_jumping === '' || power_stamina === ''
                   || power_strength === '' || power_long_shots === '' || mentality_aggression === ''
                   || mentality_interceptions === '' || mentality_positioning === '' || mentality_vision === ''
                   || mentality_penalties === '' || mentality_composure === '' || defending_marking_awareness === ''
                   || defending_standing_tackle === '' || defending_sliding_tackle === '' || goalkeeping_diving === ''
                   || goalkeeping_handling === '' || goalkeeping_kicking === '' || goalkeeping_positioning === ''
                   || goalkeeping_reflexes === '' || goalkeeping_speed === '' || position === '' || clubPlayingStatus
                   === '' || nationPlayingStatus === '' || preferredFoot === '' || attackingWorkRate === ''
                   || defendingWorkRate === '' || bodyType === '' || age === '' || height === '' || weight === ''
                   || weakFoot === '' || skillMoves === '' || international_reputation === '' || nation_rank === null;

    async function handleClick() {
        const response = await refetchPredict();
        const prediction = await response.data.data.prediction;
        setPrediction(prediction);
    }

    return (<>
        <Header/>
        <div style={{
            maxWidth: '1200px',
            margin: '120px auto',
            border: '2px solid #ccc',
            padding: '25px',
            borderRadius: "15px",
            boxSizing: "border-box",
        }}>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Athletic Metrics</Typography>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <NumericInput
                            value={age}
                            setValue={setAge}
                            disabled={false}
                            id="age"
                            label="Age"
                        />
                        <NumericInput
                            value={height}
                            setValue={setHeight}
                            disabled={false}
                            id="height"
                            label="Height in cm"
                            inputProps={{
                                min: 0
                            }}
                            error={() => (height !== "" && height <= 0)}
                        />
                        <NumericInput
                            value={weight}
                            setValue={setWeight}
                            disabled={false}
                            id="weight"
                            label="Weight in kg"
                            inputProps={{
                                min: 0
                            }}
                            error={() => (weight !== "" && weight <= 0)}
                        />
                    </div>

                    <FormControl style={{
                        margin: '10px', width: "378px", height: "56px", padding: "10px", borderRadius: "4px"
                    }} required={true}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Body Type</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={bodyType}
                            onChange={(e) => setBodyType(e.target.value)}
                            style={{color: "#00000099"}}
                        >
                            <FormControlLabel value="unique" control={<Radio/>} label="Unique"/>
                            <FormControlLabel value="lean" control={<Radio/>} label="Lean"/>
                            <FormControlLabel value="stocky" control={<Radio/>} label="Stocky"/>
                            <FormControlLabel value="normal" control={<Radio/>} label="Normal"/>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Nationality</Typography>
                    <div style={{
                        display: "flex", justifyContent: "center", alignItems: "center", width: "1055px"
                    }}>
                        <Autocomplete
                            value={nation_rank}
                            disableClearable
                            isOptionEqualToValue={(option, value) => option.value === value.value}
                            filterOptions={(options, params) => {
                                const filter = createFilterOptions();
                                return filter(options, params);
                            }}
                            onChange={(event, newValue) => {
                                setNation_rank(newValue);
                            }}
                            options={nationsArray}
                            getOptionLabel={option => option.label}
                            style={{margin: "10px", width: "272px", height: "56px"}}
                            renderInput={params => <TextField {...params} label={"Nationality"}/>}
                        />
                        <FormControl style={{
                            margin: '10px', width: "281px", height: "56px", padding: "10px", borderRadius: "4px"
                        }} required={true}>
                            <FormLabel id="demo-controlled-radio-buttons-group">International Reputation</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={international_reputation}
                                onChange={(e) => setInternational_reputation(e.target.value)}
                                style={{color: "#00000099"}}
                            >
                                <FormControlLabel value="1" control={<Radio/>} label="1"/>
                                <FormControlLabel value="2" control={<Radio/>} label="2"/>
                                <FormControlLabel value="3" control={<Radio/>} label="3"/>
                                <FormControlLabel value="4" control={<Radio/>} label="4"/>
                                <FormControlLabel value="5" control={<Radio/>} label="5"/>
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Preferred Foot</Typography>
                    <FormControl style={{
                        margin: '10px', width: "160px", height: "56px", padding: "10px", borderRadius: "4px"
                    }} required={true}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Preferred Foot</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={preferredFoot}
                            onChange={(e) => setPreferredFoot(e.target.value)}
                            style={{color: "#00000099"}}
                        >
                            <FormControlLabel value="left" control={<Radio/>} label="Left"/>
                            <FormControlLabel value="right" control={<Radio/>} label="Right"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl style={{
                        margin: '10px', width: "281px", height: "56px", padding: "10px", borderRadius: "4px"
                    }} required={true}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Weak Foot</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={weakFoot}
                            onChange={(e) => setWeakFoot(e.target.value)}
                            style={{color: "#00000099"}}
                        >
                            <FormControlLabel value="1" control={<Radio/>} label="1"/>
                            <FormControlLabel value="2" control={<Radio/>} label="2"/>
                            <FormControlLabel value="3" control={<Radio/>} label="3"/>
                            <FormControlLabel value="4" control={<Radio/>} label="4"/>
                            <FormControlLabel value="5" control={<Radio/>} label="5"/>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Work Rates</Typography>
                    <FormControl style={{
                        margin: '10px', width: "281px", height: "56px", padding: "10px", borderRadius: "4px"
                    }} required={true}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Attacking Work Rate</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={attackingWorkRate}
                            onChange={(e) => setAttackingWorkRate(e.target.value)}
                            style={{color: "#00000099"}}
                        >
                            <FormControlLabel value="high" control={<Radio/>} label="High"/>
                            <FormControlLabel value="medium" control={<Radio/>} label="Medium"/>
                            <FormControlLabel value="low" control={<Radio/>} label="Low"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl style={{
                        margin: '10px', width: "281px", height: "56px", padding: "10px", borderRadius: "4px"
                    }} required={true}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Defending Work Rate</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={defendingWorkRate}
                            onChange={(e) => setDefendingWorkRate(e.target.value)}
                            style={{color: "#00000099"}}
                        >
                            <FormControlLabel value="high" control={<Radio/>} label="High"/>
                            <FormControlLabel value="medium" control={<Radio/>} label="Medium"/>
                            <FormControlLabel value="low" control={<Radio/>} label="Low"/>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Playing Status</Typography>
                    <FormControl style={{
                        margin: '10px', width: "281px", height: "108px", padding: "10px", borderRadius: "4px"
                    }} required={true}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Position</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            style={{color: "#00000099"}}
                        >
                            <FormControlLabel value="attacker" control={<Radio/>} label="Attacker"/>
                            <FormControlLabel value="midfielder" control={<Radio/>} label="Midfielder"/>
                            <FormControlLabel value="defender" control={<Radio/>} label="Defender"/>
                            <FormControlLabel value="goalkeeper" control={<Radio/>} label="Goalkeeper"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl style={{
                        margin: '10px', width: "324px", height: "108px", padding: "10px", borderRadius: "4px"
                    }} required={true}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Club Playing Status</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={clubPlayingStatus}
                            onChange={(e) => setClubPlayingStatus(e.target.value)}
                            style={{color: "#00000099"}}
                        >
                            <FormControlLabel value="starter" control={<Radio/>} label="Starter"/>
                            <FormControlLabel value="substitute" control={<Radio/>} label="Substitute"/>
                            <FormControlLabel value="reserve" control={<Radio/>} label="Reserve"/>
                        </RadioGroup>
                    </FormControl>
                    <FormControl style={{
                        margin: '10px', width: "324px", height: "108px", padding: "10px", borderRadius: "4px"
                    }} required={true}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Nation Playing Status</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={nationPlayingStatus}
                            onChange={(e) => setNationPlayingStatus(e.target.value)}
                            style={{color: "#00000099"}}
                        >
                            <FormControlLabel value="starter" control={<Radio/>} label="Starter"/>
                            <FormControlLabel value="substitute" control={<Radio/>} label="Substitute"/>
                            <FormControlLabel value="reserve" control={<Radio/>} label="Reserve"/>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Average</Typography>
                    <NumericInput
                        value={overall}
                        setValue={setOverall}
                        disabled={false}
                        id="overall"
                        label="Overall"
                    />
                    <NumericInput
                        value={potential}
                        setValue={setPotential}
                        disabled={false}
                        id="potential"
                        label="Potential"
                    />
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Base Stats</Typography>
                    <NumericInput
                        value={pace}
                        setValue={setPace}
                        disabled={false}
                        id="pace"
                        label="Pace"
                    />
                    <NumericInput
                        value={shooting}
                        setValue={setShooting}
                        disabled={false}
                        id="shooting"
                        label="Shooting"
                    />
                    <NumericInput
                        value={passing}
                        setValue={setPassing}
                        disabled={false}
                        id="passing"
                        label="Passing"
                    />
                    <NumericInput
                        value={dribbling}
                        setValue={setDribbling}
                        disabled={false}
                        id="dribbling"
                        label="Dribbling"
                    />
                    <NumericInput
                        value={defending}
                        setValue={setDefending}
                        disabled={false}
                        id="defending"
                        label="Defending"
                    />
                    <NumericInput
                        value={physic}
                        setValue={setPhysic}
                        disabled={false}
                        id="physic"
                        label="Physic"
                    />
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Attacking</Typography>
                    <NumericInput
                        value={attacking_crossing}
                        setValue={setAttacking_crossing}
                        disabled={false}
                        id="attacking_crossing"
                        label="Attacking Crossing"
                    />
                    <NumericInput
                        value={attacking_finishing}
                        setValue={setAttacking_finishing}
                        disabled={false}
                        id="attacking_finishing"
                        label="Attacking Finishing"
                    />
                    <NumericInput
                        value={attacking_heading_accuracy}
                        setValue={setAttacking_heading_accuracy}
                        disabled={false}
                        id="attacking_heading_accuracy"
                        label="Attacking Heading Accuracy"
                    />
                    <NumericInput
                        value={attacking_short_passing}
                        setValue={setAttacking_short_passing}
                        disabled={false}
                        id="attacking_short_passing"
                        label="Attacking Short Passing"
                    />
                    <NumericInput
                        value={attacking_volleys}
                        setValue={setAttacking_volleys}
                        disabled={false}
                        id="attacking_volleys"
                        label="Attacking Volleys"
                    />
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Skill</Typography>
                    <NumericInput
                        value={skill_dribbling}
                        setValue={setSkill_dribbling}
                        disabled={false}
                        id="skill_dribbling"
                        label="Skill Dribbling"
                    />
                    <NumericInput
                        value={skill_curve}
                        setValue={setSkill_curve}
                        disabled={false}
                        id="skill_curve"
                        label="Skill Curve"
                    />
                    <NumericInput
                        value={skill_fk_accuracy}
                        setValue={setSkill_fk_accuracy}
                        disabled={false}
                        id="skill_fk_accuracy"
                        label="Skill FK Accuracy"
                    />
                    <NumericInput
                        value={skill_long_passing}
                        setValue={setSkill_long_passing}
                        disabled={false}
                        id="skill_long_passing"
                        label="Skill Long Passing"
                    />
                    <NumericInput
                        value={skill_ball_control}
                        setValue={setSkill_ball_control}
                        disabled={false}
                        id="skill_ball_control"
                        label="Skill Ball Control"
                    />
                    <br/>
                    <FormControl style={{
                        margin: '10px', width: "281px", height: "56px", padding: "10px", borderRadius: "4px"
                    }} required={true}>
                        <FormLabel id="demo-controlled-radio-buttons-group">Skill Moves</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={skillMoves}
                            onChange={(e) => setSkillMoves(e.target.value)}
                            style={{color: "#00000099"}}
                        >
                            <FormControlLabel value="1" control={<Radio/>} label="1"/>
                            <FormControlLabel value="2" control={<Radio/>} label="2"/>
                            <FormControlLabel value="3" control={<Radio/>} label="3"/>
                            <FormControlLabel value="4" control={<Radio/>} label="4"/>
                            <FormControlLabel value="5" control={<Radio/>} label="5"/>
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Power</Typography>
                    <NumericInput
                        value={power_shot_power}
                        setValue={setPower_shot_power}
                        disabled={false}
                        id="power_shot_power"
                        label="Power Shot Power"
                    />
                    <NumericInput
                        value={power_jumping}
                        setValue={setPower_jumping}
                        disabled={false}
                        id="power_jumping"
                        label="Power Jumping"
                    />
                    <NumericInput
                        value={power_stamina}
                        setValue={setPower_stamina}
                        disabled={false}
                        id="power_stamina"
                        label="Power Stamina"
                    />
                    <NumericInput
                        value={power_strength}
                        setValue={setPower_strength}
                        disabled={false}
                        id="power_strength"
                        label="Power Strength"
                    />
                    <NumericInput
                        value={power_long_shots}
                        setValue={setPower_long_shots}
                        disabled={false}
                        id="power_long_shots"
                        label="Power Long Shots"
                    />
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Movement</Typography>
                    <NumericInput
                        value={movement_acceleration}
                        setValue={setMovement_acceleration}
                        disabled={false}
                        id="movement_acceleration"
                        label="Movement Acceleration"
                    />
                    <NumericInput
                        value={movement_sprint_speed}
                        setValue={setMovement_sprint_speed}
                        disabled={false}
                        id="movement_sprint_speed"
                        label="Movement Sprint Speed"
                    />
                    <NumericInput
                        value={movement_agility}
                        setValue={setMovement_agility}
                        disabled={false}
                        id="movement_agility"
                        label="Movement Agility"
                    />
                    <NumericInput
                        value={movement_reactions}
                        setValue={setMovement_reactions}
                        disabled={false}
                        id="movement_reactions"
                        label="Movement Reactions"
                    />
                    <NumericInput
                        value={movement_balance}
                        setValue={setMovement_balance}
                        disabled={false}
                        id="movement_balance"
                        label="Movement Balance"
                    />
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Mentality</Typography>
                    <NumericInput
                        value={mentality_aggression}
                        setValue={setMentality_aggression}
                        disabled={false}
                        id="mentality_aggression"
                        label="Mentality Aggression"
                    />
                    <NumericInput
                        value={mentality_interceptions}
                        setValue={setMentality_interceptions}
                        disabled={false}
                        id="mentality_interceptions"
                        label="Mentality Interceptions"
                    />
                    <NumericInput
                        value={mentality_positioning}
                        setValue={setMentality_positioning}
                        disabled={false}
                        id="mentality_positioning"
                        label="Mentality Positioning"
                    />
                    <NumericInput
                        value={mentality_vision}
                        setValue={setMentality_vision}
                        disabled={false}
                        id="mentality_vision"
                        label="Mentality Vision"
                    />
                    <NumericInput
                        value={mentality_penalties}
                        setValue={setMentality_penalties}
                        disabled={false}
                        id="mentality_penalties"
                        label="Mentality Penalties"
                    />
                    <NumericInput
                        value={mentality_composure}
                        setValue={setMentality_composure}
                        disabled={false}
                        id="mentality_composure"
                        label="Mentality Composure"
                    />
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Defending</Typography>
                    <NumericInput
                        value={defending_marking_awareness}
                        setValue={setDefending_marking_awareness}
                        disabled={false}
                        id="defending_marking_awareness"
                        label="Defending Marking Awareness"
                    />
                    <NumericInput
                        value={defending_standing_tackle}
                        setValue={setDefending_standing_tackle}
                        disabled={false}
                        id="defending_standing_tackle"
                        label="Defending Standing Tackle"
                    />
                    <NumericInput
                        value={defending_sliding_tackle}
                        setValue={setDefending_sliding_tackle}
                        disabled={false}
                        id="defending_sliding_tackle"
                        label="Defending Sliding Tackle"
                    />
                </div>
            </div>
            <Divider/>
            <div style={{
                display: "flex", justifyContent: "center", alignItems: "center",
            }}>
                <div style={{
                    margin: '10px', padding: "10px", borderRadius: "4px", width: "1055px"
                }}>
                    <Typography variant="h4" color={"#004267"}>Goalkeeping</Typography>
                    <NumericInput
                        value={goalkeeping_diving}
                        setValue={setGoalkeeping_diving}
                        disabled={false}
                        id="goalkeeping_diving"
                        label="Goalkeeping Diving"
                    />
                    <NumericInput
                        value={goalkeeping_handling}
                        setValue={setGoalkeeping_handling}
                        disabled={false}
                        id="goalkeeping_handling"
                        label="Goalkeeping Handling"
                    />
                    <NumericInput
                        value={goalkeeping_kicking}
                        setValue={setGoalkeeping_kicking}
                        disabled={false}
                        id="goalkeeping_kicking"
                        label="Goalkeeping Kicking"
                    />
                    <NumericInput
                        value={goalkeeping_positioning}
                        setValue={setGoalkeeping_positioning}
                        disabled={false}
                        id="goalkeeping_positioning"
                        label="Goalkeeping Positioning"
                    />
                    <NumericInput
                        value={goalkeeping_reflexes}
                        setValue={setGoalkeeping_reflexes}
                        disabled={false}
                        id="goalkeeping_reflexes"
                        label="Goalkeeping Reflexes"
                    />
                    <NumericInput
                        value={goalkeeping_speed}
                        setValue={setGoalkeeping_speed}
                        disabled={false}
                        id="goalkeeping_speed"
                        label="Goalkeeping Speed"
                    />
                </div>
            </div>
            <Button
                variant="contained"
                style={{margin: '10px', height: "56px", backgroundColor: disabled ? "lightgrey" : "#004267"}}
                onClick={handleClick}
                disabled={disabled}>Predict</Button>
            <NumericInput
                value={prediction}
                setValue={setPrediction}
                disabled={true}
                id="prediction"
                label="Predicted player value"
            />
        </div>
    </>)
}

export default App
