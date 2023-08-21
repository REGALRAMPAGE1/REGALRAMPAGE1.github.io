import './MakeThingsHappen.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MakeThingsHappen() {
    const [makeThingsHappenSubmit, setMakeThingsHappenSubmit] = useState({
        FullName: '',
        Email: '',
        Phone: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/makeThingsHappenForm', makeThingsHappenSubmit);
            console.log('Form data submitted:', response.data);
            // You can handle success here, e.g., show a success message to the user
        } catch (error) {
            console.error('Error submitting form data:', error);
            // Handle error, e.g., show an error message to the user
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMakeThingsHappenSubmit((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form className="container makeThingsHappenContainer" onSubmit={handleSubmit}>
            <div className="Column">
                <div className="Row">
                    <div className="header">Let's make</div>
                </div>
                <div className="Row">
                    <div className="header">things happen</div>
                </div>
            </div>
            <div className="form">
                <TextField id="outlined-basic" name="FullName" label="Full Name" variant="outlined" value={makeThingsHappenSubmit.FullName} onChange={handleChange}/>
                <br/>
                <TextField id="outlined-basic" name="Email" label="Email" variant="outlined" value={makeThingsHappenSubmit.Email} onChange={handleChange}/>
                <br/>
                <TextField id="outlined-basic" name="Phone" label="Phone" variant="outlined" value={makeThingsHappenSubmit.Phone} onChange={handleChange}/>
                <br/>
                <Button 
                    type="submit"
                    className='homeSubmit'
                    variant="contained"
                    style={{borderRadius: '20px', fontFamily: 'Boogaloo', boxShadow: '7px 7px 7px rgba(0, 0, 0, 0.3)', backgroundColor: '#003E72', fontSize: '1em'}}
                ><span className='submitButtonText'>Submit</span></Button>
            </div>
        </form>
    );
}
