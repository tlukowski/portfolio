import React from 'react'
import { SingleTypesProject } from '../../../types/SingleProjects';
import imageUrl from '../../../assets/placeholder.jpg';
import finishIcon from '../../../assets/finish.svg';
import workingIcon from '../../../assets/circle.svg';
import TechnologiesList from '../../TechnologiesList';

const SingleProject = ({status,title,desc,link}: SingleTypesProject) => {
 
  return (
    <>
    <div className='grid grid-cols-2'>
        <div className='pl-40 py-12 text-white flex flex-col' style={{background:'linear-gradient(90deg, rgba(52, 98, 89, 0.65) 0%, rgba(52, 98, 89, 0.25) 57.29%, rgba(52, 98, 89, 0) 100%)'}}>
            <div className="status flex gap-x-2">                
                <img className='fill-green-700' src={status ? finishIcon : workingIcon} alt=""></img>
                <span className='h-full block w-[2px] bg-white'></span>
                {status ? 'Finished' : 'In Progress'}
            </div>
            <div className="title">
                <h3 className="font-black text-[10.9375rem] font-['Roboto Slab'] leading-none">{title}</h3>
            </div>
            <div className="desc text-3xl font-normal">
                {desc}
            </div>
            <div className='flex mt-auto'>
            <a className='bg-[#346259] text-white text-lg py-3 px-12 block rounded-2xl uppercase' href={link}>Visit App Website</a>
            </div>
        </div>
        <div className='pr-40 py-12'>
            <img className='max-w-[830px]' src={imageUrl} alt=""></img>
        </div>
    </div>    
    <TechnologiesList/>
    </>
  )
}

export default SingleProject