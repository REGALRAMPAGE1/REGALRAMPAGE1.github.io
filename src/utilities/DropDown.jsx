import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function DropDown({id, name, label, value, menuItemsArr, onChange}){
    return(
        <>
            <FormControl fullWidth sx={{minHeight: 13}}>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id={id}
                    name={name}
                    value={value}
                    label={label?label:id}
                    onChange={onChange}
                >
                {menuItemsArr.map((item, i) => (
                    <MenuItem key={i} value={item}>{item}</MenuItem>
                ))}
            </Select>
            </FormControl>
        </>
    );
}