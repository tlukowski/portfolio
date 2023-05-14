import SingleProject from './SingleProject'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {status:true,title:'DFL',desc:'An application that will help you to report garbage outbreaks and find trash collection points in your city.',link:'#',imageUrl:'xd'},
  {status:false,title:'DFL',desc:'An application that will help you to report garbage outbreaks and find trash collection points in your city.',link:'#',imageUrl:'xd'}
]

const Projects = () => {
  return (
    <div id="Projects">
        <div className='flex justify-center'> 
            <h2 className='text-5xl leading-snug font-black text-white pb-2 relative after:bg-white after:content-[""] after:w-[120%] after:h-[2px] after:absolute after:bottom-0 after:left-[-10%] mb-8'>Projects</h2>
        </div>
        <div>
          <Swiper
          modules={[Navigation, Pagination]}        
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          >
              {projects.map((item,index) => (                
                  <SwiperSlide>
                      <SingleProject key={index} status={item.status} title={item.title} desc={item.desc} link={item.link} imageUrl={item.imageUrl}/>
                  </SwiperSlide>                
              ))}
          </Swiper>         
        </div>
    </div>
  )
}

export default Projects