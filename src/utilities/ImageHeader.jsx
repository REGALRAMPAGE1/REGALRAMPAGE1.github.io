import './ImageHeader.css';

export default function ImageHeader({caption, url}){
    return (
        <div className='imageContainer'>
            <img
            className='imageHeaderClass'
            src={url}
            alt=""
            />
            <p className='caption'>{caption}</p>
        </div>
    );
}