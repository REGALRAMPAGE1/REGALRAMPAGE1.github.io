import './About.css'
import AboutFrankenstein from './AboutFrankenstein';
import OurPhilosophy from './OurPhilosophy';
import WhyChooseUs from './WhyChooseUs';
import ImageHeader from '../../utilities/ImageHeader';

export default function About(){
    return (
        <>
            <div className='aboutContainer'>
                <ImageHeader caption="ABOUT" url="https://res.cloudinary.com/dpctqfw1a/image/upload/v1689796075/Home_Page_Banner_cc83un.jpg"/>
                <AboutFrankenstein/>
                <OurPhilosophy/>
                <WhyChooseUs/>
            </div>
        </>
    );
};