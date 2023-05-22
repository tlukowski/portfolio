import React from 'react'
import { SingleTypesProject } from '../../../types/SingleProjects';
// import imageUrl from '../../../assets/placeholder.jpg';
import finishIcon from '../../../assets/finish.svg';
import workingIcon from '../../../assets/circle.svg';
import TechnologiesList from '../../TechnologiesList';
const SingleProject = ({status,title,desc,link,imageUrl,logo}: SingleTypesProject) => {
 
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 h-full'>
        <div className='px-6 2xl:pl-40 py-12 text-white flex flex-col order-2 md:order-1' style={{background:'linear-gradient(90deg, rgba(52, 98, 89, 0.65) 0%, rgba(52, 98, 89, 0.25) 57.29%, rgba(52, 98, 89, 0) 100%)'}}>
            <div className="status flex gap-x-2">                
                <img className='fill-green-700' src={status ? finishIcon : workingIcon} alt=""></img>
                <span className='h-full block w-[2px] bg-white'></span>
                {status ? 'Finished' : 'In Progress'}
            </div>            
            <div className="title pt-4 mt-2 border-t-2 border-white">
                {logo ? <img src={logo} alt=''></img> : <h3 className="font-black text-8xl md:text-[10.9375rem] font-['Roboto Slab'] leading-none">{title}</h3>}
            </div>
            <div className="desc text-xl md:text-3xl font-normal mt-4">
                {desc}
                <TechnologiesList/>
            </div>
            <div className='flex pt-8 mt-auto'>
            <a className='bg-[#346259] text-white text-lg py-3 px-12 block rounded-2xl uppercase' href={link}>Visit App Website</a>
            </div>
        </div>
        <div className='2xl:pr-40 py-12 max-w-[830px] order-1 md:order-2 flex items-center'>
            <img src={imageUrl} alt=""></img>
        </div>
    </div>    
    
    </>
  )
}

export default SingleProject