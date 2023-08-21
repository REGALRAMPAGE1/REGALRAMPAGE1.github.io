import './Services.css';
import OurServices from './OurServices';
import ServicesBlock from './ServicesBlock';
import ImageHeader from '../../utilities/ImageHeader';

export default function Services(){
    return (
        <>
            <div className='servicesContainerMain'>
                <ImageHeader url="https://res.cloudinary.com/dpctqfw1a/image/upload/v1689796073/Services_Banner_be9k3t.jpg" caption="SERVICES"/>
                <OurServices/>
                <ServicesBlock/>
            </div>
        </>
    );
};