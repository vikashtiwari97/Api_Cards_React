import React from 'react'
import Card from './Card';
 
const Cards = (props) => {
    const dataResponse = props.cardData;
    
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
    <div>
        {
            getResponse().map((course)=>{
                return <Card key={course.id} courses={course}/>
            })
        }
    </div>
  )
}

export default Cards