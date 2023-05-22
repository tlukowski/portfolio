import bg from '../../assets/technologies.svg';
import TechnologiesItems from '../TechnologiesItems';

const technologiesWeb = [
  {image:'html.svg',title:'HTML',experience:'+4 year experience'},  
  {image:'css.svg',title:'CSS',experience:'+4 year experience'},  
  {image:'js.svg',title:'JavaScript',experience:'+2 year experience'},  
  {image:'ts.svg',title:'TypeScript',experience:'+0.5 year experience'},  
]
const technologiesFrameworks = [
  {image:'next.svg',title:'Next.js',experience:'+0.5 year experience'},  
]
const technologiesLibraries = [
  {image:'react.svg',title:'React',experience:'+0.5 year experience'},  
  {image:'tailwind.svg',title:'TailwindCSS',experience:'+0.5 year experience'},  
]
const technologiesCms = [
  {image:'',title:'Wordpress',experience:'+2 year experience'}, 
  {image:'',title:'Prestashop',experience:'+3 year experience'}, 
]
const Technologies = () => {
    return (
     <section id="Technologies" style={{backgroundImage: `url(${bg})`}} className="px-6 xl:pl-36 xl:px-0 mx-auto bg-no-repeat bg-right-top max-md:bg-[length:50%]">
      <div className='max-w-3xl'>
        <div>
          <div className='text-4xl text-white font-black'>
            and finally,
          </div>
          <div className='text-9xl leading-tight text-white'>
            tech.
          </div>
          <div className='text-2xl text-white font-bold'>
            In my personal journey, I already worked with some techonologies, and here they are:
          </div>
        </div>   
        <TechnologiesItems title='Web' data={technologiesWeb} />
        <TechnologiesItems title='Frameworks' data={technologiesFrameworks} />
        <TechnologiesItems title='Library' data={technologiesLibraries} />     
        <TechnologiesItems title='Cms' data={technologiesCms} />     
      </div>
     </section>
    )
  }
  
  export default Technologies