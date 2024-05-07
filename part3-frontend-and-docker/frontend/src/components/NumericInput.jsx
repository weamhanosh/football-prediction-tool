import {TextField} from '@mui/material';

const NumericInput = ({value, setValue, disabled, id, label, inputProps, error = null}) => {
    return (
        <TextField
            style={{margin: '10px', width: '300px'}}
            id={id}
            label={label}
            variant="outlined"
            value={value}
            disabled={disabled}
            required={!disabled}
            onChange={e => {
                setValue(e.target.value);
            }}
            type={'number'}
            inputProps={inputProps ? inputProps : {
                step: 1,
                min: 0,
                max: 99
            }}
            error={(error ? error() : (value < 0 || value > 99)) && !disabled}
        />
    );
};

export default NumericInput;
