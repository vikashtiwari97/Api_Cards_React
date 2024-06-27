import React from 'react'
import { FcLike } from 'react-icons/fc';

const Card = (props) => {
    let allData = props.courses;
  return (
    <div>
        <div>
            <img src={allData.image.url}/>
        </div>
        <div>
            <button>
                <FcLike/>
            </button>
        </div>
        <div>
            <p>{allData.title}</p>
            <p>{allData.description}</p>
        </div>
    </div>
  )
}

export default Card