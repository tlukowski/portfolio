import React from 'react'
import leftSvg from '../../assets/Shape1.svg'
import rightSvg from '../../assets/Shape2.svg'
import mouse from '../../assets/mouse.svg'
import doubleArrow from '../../assets/doublearrow.svg'
const socials = [
    {name:'mail',src:'/mail.svg',href:'xd'},
    {name:'instagram',src:'/instagram.svg',href:'xd'},
    {name:'whatsapp',src:'/whatsapp.svg',href:'xd'},    
]

const content = [
    {}
]

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
                <p>Ongoing designer and  software engineer</p>
            </div>
            <div className='text-center'>
                <a href="#" className='btn btn-primary'>
                    Contact
                </a>
            </div>
            <div>
                <ul className='flex gap-x-6'>
                    {socials.map(({name,src,href}, index) => (
                    <li key={index} className='text-2xl text-white'>
                        <a href="href"><img src={src} alt={name}/></a>
                    </li>
                    )) }   
                </ul>
            </div>
            <div className='mt-12 flex justify-center flex-col items-center gap-y-3'>
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