import ImageCarousel from './ImageCarousel';
import './ImageCarouselLayout.css'

const ImageCarouselLayout = () => {
  const carouselImages = [
    'https://res.cloudinary.com/dpctqfw1a/image/upload/c_fill,g_auto/v1692117816/Home_page_5_gwkgdx.png',
    'https://res.cloudinary.com/dpctqfw1a/image/upload/c_fill,g_auto/v1692117813/Home_page_1_yl9nfn.png',
    'https://res.cloudinary.com/dpctqfw1a/image/upload/c_fill,g_auto/v1692117750/Home_page_3_d7c3gp.png',
  ];

  return (
      <div className="ImageCarouselStyle">
        <ImageCarousel images={carouselImages} />
      </div>
  );
};

export default ImageCarouselLayout;
