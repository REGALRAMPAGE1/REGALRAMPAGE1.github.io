import './Consultation.css'
import ConsultationForm from './ConsultationForm';
import ImageHeader from '../../utilities/ImageHeader';
import ConsultationDescription from './ConsultationDescription';
import ConsultationHeader from './ConsultationHeader';

export default function Consultation(){
    return (
        <>
            <ImageHeader caption="CONSULTATION" url="https://res.cloudinary.com/dpctqfw1a/image/upload/v1692031570/Consultation_lttqmv.png"/>
            <ConsultationHeader/>      
            <ConsultationDescription/>
            <div>
                <ConsultationForm/>
            </div>
        </>
    );
};