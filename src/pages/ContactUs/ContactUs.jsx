import './ContactUs.css';
import GetInTouch from './GetInTouch';
import GetInTouchForm from './GetInTouchForm';
import ImageHeader from '../../utilities/ImageHeader';

export default function ContactUs() {
  return (
    <div className='contactUsContainer'>
      <ImageHeader url="https://res.cloudinary.com/dpctqfw1a/image/upload/v1689796074/Contact_Us_banner_e5lfel.jpg" caption="CONTACT US"/>
      <GetInTouch />
      <GetInTouchForm />
    </div>
  );
};
