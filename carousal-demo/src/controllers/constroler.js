
import { useState,useEffect } from 'react'
// import ImageGallery from "react-image-gallery";

const Controler = () =>{
  
  const [apiData,setApiData] = useState([]);
  const [imageData,setImageData] = useState([]);
  const [apiError,setApiError] = useState(false);

  const getImagesAPI = () => {

    fetch('http://localhost:3030/imagesAPI').then((res)=>res.json()).then((result) => {
      setApiData(result)
      setImageData(result) 
    }).catch((err)=>{
      console.log(err);
      setApiError(true);
    })
  }

  const filterByTab = (albumType) => {
        console.log('albumType',albumType);
        if (albumType !== "all") 
        {
            setImageData(apiData.filter((eachItem) => eachItem.album === albumType))
        }
        else
        {   
            setImageData(apiData) 
        }
     }
 
     useEffect(() => { 
      getImagesAPI(); 
    }, [])
  

  return {
    imageData,filterByTab,apiError
  }
}

export default Controler