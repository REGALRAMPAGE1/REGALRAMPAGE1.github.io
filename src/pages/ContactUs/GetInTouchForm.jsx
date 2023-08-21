import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import './GetInTouchForm.css';
import Button from '@mui/material/Button';
import {useState} from 'react';
import axios from 'axios';

export default function GetInTouchForm() {
    const [contactUs, setContactUs] = useState({
        Name: '',
        Surname: '',
        Email: '',
        Phone: '',
        Message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/contactUs', contactUs);
            console.log('Form data submitted:', response.data);
            // You can handle success here, e.g., show a success message to the user
        } catch (error) {
            console.error('Error submitting form data:', error);
            // Handle error, e.g., show an error message to the user
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactUs((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (
        <div className='getInTouchForm'>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth className='getInsets' id="Name" name='Name' label="Name" variant="outlined" value={contactUs.Name} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth className='getInsets' id="Surname" name='Surname' label="Surname" variant="outlined" value={contactUs.Surname} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth className='getInsets' id="email" name='Email' label="Email" variant="outlined" value={contactUs.Email} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField fullWidth className='getInsets' id="phone" name='Phone' label="Phone" variant="outlined" value={contactUs.Phone} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            id="message"
                            name='Message'
                            value={contactUs.Message}
                            label="Message (optional)"
                            variant="outlined"
                            className='getInsets'
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <div className="buttonContainer">
                        <Button 
                            className='getInTouchSubmit'
                            variant="contained"
                            type='submit'
                            style={{borderRadius: '20px', fontFamily: 'Boogaloo', boxShadow: '7px 7px 7px rgba(0, 0, 0, 0.3)', backgroundColor: '#003E72', fontSize: '1em'}}
                        ><span className='submitButtonText'>Submit</span></Button>
                    </div>
            </form>
        </div>
    );
}
