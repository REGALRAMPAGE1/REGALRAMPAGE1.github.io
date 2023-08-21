import React, { useState } from 'react';
import TextFieldComponent from '../../utilities/TextFieldComponent';
import Grid from '@mui/material/Grid';
import './CustomQuoteForm.css'
import DropDown from '../../utilities/DropDown';

export default function CustomQuoteForm() {
    const serviceDropDownItems = ['Branding', 'Print & Digital Design', 'Social Media', 'Video Editing', 'Marketing & Sales', 'Booklet Design', 'Website Development']
    // ################################### Service Types (Hardcoded, should be replaced with admin items) #######################################
    const webServiceItems = ['Website Development', 'Website Design', 'SEO'];
    const brandingServiceItems = ['Banner', 'Logo', 'Company Shirt Design'];
    const printDigitalItems = ['Flyer', 'Card'];
    const socialMediaItems = ['Social Media Post', 'Advert'];
    const videoEditingItems = ['Advert', 'Company Motivation'];
    const marketingSalesItems = ['Marketing of company', 'Sales for Company'];
    const bookletDesignItems = ['Company info booklet design'];
    // ################################### Service Types (Hardcoded, should be replaced with admin items)#######################################
    const [customQuote, setcustomQuote] = useState({
        Name: '',
        Surname: '',
        Email: '',
        Phone: '',
        Service: '',
        ServiceType: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setcustomQuote((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    const [serviceTypeOptions, setServiceTypeOptions] = useState([]);

    const handleServiceSelection = (event) => {
        const {id, value} = event.target;
        setcustomQuote((prevData) => ({
            ...prevData,
            [id]: value
        }));
        
        //Still to be improved majorly
        //I think it should be replaced with a well designed lookup value (could integrate with admin back-end)
        //lookup a value matching the "value" of the item, then return the array matching the item (for modularity)
        switch(value){
            case 'Website Development':
                setServiceTypeOptions(webServiceItems);
                break;
            case 'Branding':
                setServiceTypeOptions(brandingServiceItems);
                break;
            case 'Print & Digital Design':
                setServiceTypeOptions(printDigitalItems);
                break;
            case 'Social Media':
                setServiceTypeOptions(socialMediaItems);       
                break; 
            case 'Video Editing':
                setServiceTypeOptions(videoEditingItems);
                break;
            case 'Marketing & Sales':
                setServiceTypeOptions(marketingSalesItems);
                break;
            case 'Booklet Design':
                setServiceTypeOptions(bookletDesignItems);
                break;
        }
    }

    return (
        <div className='customQuoteFormDiv'>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={5}>
                    <Grid item xs={6} md={6}>
                        <TextFieldComponent
                            id="Name"
                            value={customQuote.Name}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextFieldComponent
                            id="Surname"
                            value={customQuote.Surname}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextFieldComponent
                            id="Email"
                            value={customQuote.Email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <TextFieldComponent
                            id="Phone"
                            value={customQuote.Phone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={6} md={6}>
                        {/*DropDown({id, name, label, value, menuItemsArr, onChange}){ */}
                        <DropDown id="Service" name="Service" label="Select Service" menuItemsArr={serviceDropDownItems} onChange={handleServiceSelection}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        {/*DropDown({id, name, label, value, menuItemsArr, onChange}){ */}
                        <DropDown id="ServiceType" name="ServiceType" label="Select Service Type" menuItemsArr={serviceTypeOptions} onChange={handleChange}/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <button type="submit">Submit</button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}
