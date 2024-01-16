
import { useState,useEffect } from 'react'
// import ImageGallery from "react-image-gallery";

export const GetImagesController = () =>{
  
  const apiURL = 'https://mocki.io/v1/7bd4e6c8-20bc-4a2c-b5ca-82bb2e7169e8';
  const [apiData,setApiData] = useState([]);
  const [imageData,setImageData] = useState([]);
  const [apiError,setApiError] = useState(false);

  const getImagesAPI = () => {
    fetch(apiURL).then((res)=>res.json()).then((result) => {
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
       getImagesAPI() 
    }, [])
  

  return {
    imageData,filterByTab,apiError
  }
}