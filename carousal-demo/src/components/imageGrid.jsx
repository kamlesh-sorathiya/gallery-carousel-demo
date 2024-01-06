import { useState,useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel  from './carousal';
import {GetImagesController} from '../controllers/controllers';
import { Button } from 'react-bootstrap';
import '../assets/style/modalStyle.css';


function ImageGrid() {

   const {imageData, filterByTab} = GetImagesController();
   const [openModal, setOpenModal] = useState(false);
   const [selectedIndex,setSelectedIndex] = useState(0);
   const [selectedTab,setSelectedTab] = useState('all');

   const setOpenCarousal = (e) => {
    setSelectedIndex(e.target.id);
    setOpenModal(!openModal);
  }  
  
   const handleFilter = (e) => {
        setSelectedTab(e.target.id);
        filterByTab(`${e.target.id}`);
   }

//   console.log('imageData',imageData);

  return (
    <>
    <Container>
    <Row>
      <Col xs={12}>
        <div className='filter-tabs'>
         <Button variant={`${selectedTab === "all" ? 'primary' : 'secondary'} `} id='all' onClick={(e) => handleFilter(e)}>All</Button>
         <Button variant={`${selectedTab === "development" ? 'primary' : 'secondary'} `} id='development' onClick={(e) => handleFilter(e)}>Development</Button>
         <Button variant={`${selectedTab === "branding" ? 'primary' : 'secondary'} `} id='branding'  onClick={(e) => handleFilter(e)}>Branding</Button>
         <Button variant={`${selectedTab === "design" ? 'primary' : 'secondary'} `} id='design'  onClick={(e) => handleFilter(e)}>Design</Button>
         </div>
      </Col>
      {imageData.map((data,index)=> (
        <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className='p-1 position-relative'>
          <div className='grid-item' key={index} >
            <span className='img-id'>{data.id}</span>
            <Image  id={index} src={data.url} width={"100%"} rounded onClick={(e) => setOpenCarousal(e)} />
            </div>
        </Col>
        ))}
     </Row>
     </Container>
     
    <div className={`caro-modal ${openModal ? "open" : ''}`} >
        <div className="close-icon" onClick={()=> setOpenModal(false)}>X</div>
        <Carousel imageArray={imageData} startIndex={selectedIndex} />
    </div>
    </>
  )
}

export default ImageGrid
