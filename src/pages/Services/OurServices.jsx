import BoxUnderHeader from "../../utilities/BoxUnderHeader";
import './OurServices.css'

export default function OurServices(){
    return (
        <>
            <div className='servicesContainer'>
                <h1>OUR SERVICES</h1>
                <BoxUnderHeader width={80}/>
                <p className="servicesParagraph">From creating chillingly captivating logos to electrifying web design and everything in between.</p>
                <p className="servicesParagraph">Frankenstein Creations offers a wide array of services tailored to suit your brand's needs:</p>
            </div>
        </>
    );
}