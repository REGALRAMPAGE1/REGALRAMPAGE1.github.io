import './ConsultationHeader.css';
import BoxUnderHeader from '../../utilities/BoxUnderHeader';

export default function ConsultationHeader(){
    return (
        <>
            <div className='ConsultationHeaderSection'>
                <h1>CONSULTATION BOOKING</h1>
                <BoxUnderHeader width={80}/>
            </div>
        </>
    );
}