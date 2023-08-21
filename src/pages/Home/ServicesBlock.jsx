import './ServicesBlock.css'
import { Typewriter, Cursor } from 'react-simple-typewriter'

export default function ServicesBlockHP()
{
    return (
        <div className='services'>
            <h2>
                <span style={{ color: '#00C2B5', fontFamily: 'Boogaloo', fontSize: '1.5em'}}>
                    <Typewriter
                        words={['Branding', 'Print & Digital Design', 'Social Media', 'Video Editing', 'Marketing & Sales', 'Booklet Design']}
                        loop={20}
                        typeSpeed={70}
                        deleteSpeed={80}
                        delaySpeed={1000}
                    />
                    <Cursor/>
                </span>
            </h2>
        </div>
    );
}