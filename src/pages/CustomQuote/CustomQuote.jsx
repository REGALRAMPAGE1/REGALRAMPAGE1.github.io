import './QuotationForm.css';
import BoxUnderHeader from '../../utilities/BoxUnderHeader';
import CustomQuoteForm from './CustomQuoteForm';

export default function CustomQuote(){
  return (
    <>
      <div className='customQuoteHeaderSection'>
          <h1>CRAFTING YOUR VISION</h1>
          <BoxUnderHeader width={80}/>
      </div>
      <div className='descriptionParagraph'>
        <p>Welcome to Frankenstein Creations' exclusive quotation 
        generation process, where your ideas come to life in the form 
        of personalized pricing. Just like Dr. Frankenstein breathed 
        life into his creation, we infuse your projects with individualized 
        attention. Here's a glimpse into how the process unfolds:</p>
      </div>
      <div className='breatheLifeParagraph'>
        <p>
        <div className='breatheLifeHeader'>Breathe Life into Your Concept:</div> Our journey begins as you fill out our user-friendly online form. 
        Describe your project in detail, share your vision, and provide insights into your unique 
        requirements. Think of this as the moment your ideas start to take shape.
        </p>
      </div>
      <div className='breatheLifeParagraph'>
        <p>
        <div className='breatheLifeHeader'>The Art of Fusion:</div> Once you've shared your vision, our dedicated sales team takes 
        over. Just as Dr. Frankenstein meticulously assembled each part of his creature, our team 
        combines their expertise with your project specifics to craft a quotation that resonates with 
        your aspirations.
        </p>
      </div>
      <div className='breatheLifeParagraph'>
        <p>
        <div className='breatheLifeHeader'>Unveiling Your Creation:</div> Imagine waking up to find your inbox bearing the fruits 
        of our collaboration. Open the email from Frankenstein Creations to reveal a custom-crafted quotation, attached with care. 
        It's more than just numbers – it's the embodiment of your dreams rendered in a tangible format.
        </p>
      </div>
    <CustomQuoteForm/>
    </>
  );
}