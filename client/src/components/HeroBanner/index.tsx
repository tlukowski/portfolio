import React from 'react'
import leftSvg from '../../assets/Shape1.svg'
import rightSvg from '../../assets/Shape2.svg'
import mouse from '../../assets/mouse.svg'
import doubleArrow from '../../assets/doublearrow.svg'
import Socials from '../Socials'

const handleClickScroll = () => {
    const element = document.querySelector('#Projects')
    if (element){
        element.scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    }
}

const HeroBanner = () => {
  return (
      <div className='bg-black min-h-screen pt-32'> 
        <div className='flex justify-between'>     
        <img src={leftSvg} alt=""/>
        <div className='xl:min-w-[500px] xl:max-w-[570px] content text-white flex flex-col gap-6 items-center'>
            <div className='text-sugarpunch text-2xl'>
                Hi , I’m 
            </div>
            <div className='text-sugarpunch text-8xl leading-tight text-center'>
                Łukowski<br/> Tomasz
            </div>
            <div className='text-3xl leading-snug text-center'>
                <p>Ongoing frontend developer</p>
            </div>
            <div className='text-center'>
                <a href="/" className='btn btn-primary'>
                    Contact
                </a>
            </div>
            <Socials/>
            <div className='mt-auto mb-12 flex justify-center flex-col items-center gap-y-3 cursor-pointer' onClick={handleClickScroll}>
                <img src={mouse} alt={mouse}/>
                <img className='w-6' src={doubleArrow} alt=""/>
            </div>
        </div>
        <img src={rightSvg} alt=""/>
            
        </div>
      </div>
  )
}

export default HeroBanner