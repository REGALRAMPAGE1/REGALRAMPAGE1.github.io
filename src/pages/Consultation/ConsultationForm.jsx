import TextFieldComponent from '../../utilities/TextFieldComponent';
import TextField from '@mui/material/TextField';
import DropDown from '../../utilities/DropDown';
import Grid from '@mui/material/Grid';
import './ConsultationForm.css';
import DateTimePickerCustom from '../../utilities/DateTimePicker';
import {useState} from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function ConsultationForm(){
    const menuItemsArr = ['Branding', 'Print & Digital Design', 'Social Media', 'Video Editing', 'Marketing & Sales', 'Booklet Design']
    const timeOfCons = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '13:00 PM', '13:30 PM', '14:00 PM', '14:30 PM', '15:00 PM']

    const [consultationSubmit, setconsultationSubmit] = useState({
        Name: '',
        Surname: '',
        Email: '',
        Phone: '',
        Reason: '',
        ConsultationDate: '',
        TimeOfDay: '',
        consultationMessage: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form data before submission:", consultationSubmit);
    
        try {
            const response = await axios.post('http://localhost:3000/consultation', consultationSubmit);
            console.log('Form data submitted:', response.data);
        } catch (error) {
            console.error('Error submitting form data:', error);
        }
    };

    const [reason, setReason] = useState('');
    
    const handleReasonChange = (event) => {
        const selectedReason = event.target.value;
        setReason(selectedReason);
        setconsultationSubmit((prevData) => ({
            ...prevData,
            Reason: selectedReason,
        }));
    };
    
    
    const handleDateChange = (date) => {
        setconsultationSubmit((prevData) => ({
            ...prevData,
            ConsultationDate: date,
        }));
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setconsultationSubmit((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
            <form className="consultationForm" onSubmit={handleSubmit}>
                <Grid container spacing={5}>
                    <Grid item xs={6} md={6}>
                        <TextFieldComponent id="Name" value={consultationSubmit.Name} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextFieldComponent id="Surname" value={consultationSubmit.Surname} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextFieldComponent id="Email" value={consultationSubmit.Email} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextFieldComponent id="Phone" value={consultationSubmit.Phone} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={6} md={12}>
                        <DropDown id="Reason" label="Reason For Consultation" menuItemsArr={menuItemsArr} value={consultationSubmit.Reason} onChange={handleReasonChange}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <DateTimePickerCustom
                            id="ConsultationDate"
                            name="ConsultationDate"
                            value={consultationSubmit.ConsultationDate}
                            handleDateChange={handleDateChange}
                        />
                        </Grid>
                    <Grid item xs={6} md={6}>
                        <DropDown id="TimeOfDay" label="Time of Consultation" name="TimeOfDay" menuItemsArr={timeOfCons} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            id="message"
                            label="Message (optional)"
                            variant="outlined"
                            className='getInsets'
                            name="consultationMessage"
                            value={consultationSubmit.consultationMessage}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <div className="buttonContainer">
                    <Button 
                        type="submit"
                        className='consultationSubmit'
                        variant="contained"
                        style={{borderRadius: '20px', fontFamily: 'Boogaloo', boxShadow: '7px 7px 7px rgba(0, 0, 0, 0.3)', backgroundColor: '#003E72', fontSize: '1em'}}
                    ><span className='submitButtonText'>Submit</span></Button>
                </div>
            </form>
        );
}