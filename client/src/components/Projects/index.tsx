import SingleProject from './SingleProject'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {status:true,logo:'elcaro-logo.svg',title:'Elcaro',desc:'Website created for Elcaro with use Wordpress CMS',link:'https://elcaro.pl/',imageUrl:'elcaro.jpg'},
  {status:true,logo:'topdrogeria-logo.png',title:'TopDrogeria',desc:'Website created for Topdrogeria with use Prestashop CMS',link:'https://www.topdrogeria.pl/',imageUrl:'topdrogeria.jpg'},
  {status:true,logo:'how2edu-logo.svg',title:'TopDrogeria',desc:'Landing page created for How2edu',link:'http://aplikacja.dev9.pro/',imageUrl:'how2edu.jpg'}
]

const Projects = () => {
  return (
    <section id="Projects" className='pt-24'>
        <div className='flex justify-center'> 
            <h2 className='text-3xl md:text-5xl md:leading-snug font-black text-white pb-2 relative after:bg-white after:content-[""] after:w-[120%] after:h-[2px] after:absolute after:bottom-0 after:left-[-10%] mb-8'>Projects</h2>
        </div>
        <div>
          <Swiper
          modules={[Navigation, Pagination]}        
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          >
              {projects.map((item,index) => (
                  <SwiperSlide key={index}>
                      <SingleProject logo={item.logo} status={item.status} title={item.title} desc={item.desc} link={item.link} imageUrl={item.imageUrl}/>
                  </SwiperSlide>     
              ))}
          </Swiper>         
        </div>
    </section>
  )
}

export default Projects