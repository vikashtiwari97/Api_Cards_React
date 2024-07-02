import React from 'react'
import { FcLike , FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let allData = props.courses;
    let setLikeCourses = props.setLikeCourses
    let likeCourses = props.likeCourses;
    function clickHandler(){
       if(likeCourses.includes(allData.id) ){
            setLikeCourses((prev) => prev.filter((cid) => (cid !== allData.id)));
            toast.warning("Like Removed");
       }
       else{
        if(likeCourses.length === 0 ){
            setLikeCourses([allData.id]);
        }
        else{
            setLikeCourses((prev)=> [...prev, allData.id])
        }
        toast.success("Like Successfully")
       }
    }
  return (
    <div className='w-[300px] rounded-md overflow-hidden border-solid border-2 border-black'>
        <div className='relative'>
            <img src={allData.image.url}/>
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-20px] grid place-items-center'>
            <button onClick={clickHandler}>
                {
                    likeCourses.includes(allData.id) ? (<FcLikePlaceholder fontSize="1.75rem"/>) : (<FcLike fontSize="1.75rem"/>)
                }
            </button>
        </div>
        </div>
        <div className='p-4'>
            <p className='font-semibold text-lg leading-6' >{allData.title}</p>
            <p className='mt-2'>
            {
            
                allData.description.length > 100 ? (allData.description.substr(0,100)) + "..." : (allData.description)
            
            }
            </p>
        </div>
    </div>
  )
}

export default Card