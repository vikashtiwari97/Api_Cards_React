import React, { useState } from 'react'
import Card from './Card';
 
const Cards = (props) => {
    const dataResponse = props.cardData;
    const[likeCourses,setLikeCourses] = useState([]);
    
    function getResponse(){
        let allCardData = [];
        Object.values(dataResponse).forEach((array) => {
            array.forEach((data)=>{
                allCardData.push(data);
            })
        })
        return allCardData;
    }
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getResponse().map((course)=>{
                return <Card key={course.id}
                courses={course}
                likeCourses={likeCourses}
                setLikeCourses={setLikeCourses}
                />
            })
        }
    </div>
  )
}

export default Cards