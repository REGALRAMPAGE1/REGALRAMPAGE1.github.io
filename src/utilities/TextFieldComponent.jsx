import TextField from '@mui/material/TextField';

export default function TextFieldComponent({ id, value, onChange }) {
    return (
        <TextField
            fullWidth
            id={id}
            name={id}
            label={id}
            value={value}
            variant="outlined"
            onChange={onChange}  // Change prop name to "onChange"
        />
    );
}
