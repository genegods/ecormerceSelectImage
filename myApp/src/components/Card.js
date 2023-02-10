import React, { useState} from "react";
import {CardData} from '../data/CardData'
 import largeImg from '../asserts/blueT.png'

const Card = () => {
    const [selectedImage, setSelectedImage] = useState(null);


  
  return (
    
  <React.Fragment>
  <main className="centered flex-col pt-60">
    <div className="w-96 h-96 centered bg-white shadow-lg">
      {
        selectedImage? 
        <img src={selectedImage.img} alt='image' className="h-80"/>:
        <img src={largeImg} alt='image' className='h-80' />
      }

    </div>
    <div className="grid grid-cols-4 gap-2 mt-2 w-96">
      {
        CardData.map((item, index) => {
            return(
                <div key={index}>
                    <div className="bg-white shadow-lg px-2 py-2 centered">
                        <img src={item.img} alt='cardImage'
                         className='h-16 w-12'
                         onClick={() =>setSelectedImage(item)}
                       
                        />
                    </div>
                </div>
            )
        })
      }
    </div>
  </main>
</React.Fragment>
  )
}

export default Card