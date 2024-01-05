import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'

const Carousal = ({imageArray=[], startIndex=0}) => { 

    const newArray = imageArray?.map(obj => {
        return {
          original: obj.url,
          thumbnail:obj.thumbnailUrl,
        };
      });
 
    console.log('currentIndex,imageArray',startIndex,imageArray.length);

  return (
    <>  
          <ImageGallery items={newArray} startIndex={Number(startIndex)} /> 
    </>
  )
}

export default Carousal
