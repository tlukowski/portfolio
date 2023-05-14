import bg from '../../assets/technologies.svg';
import TechnologiesItems from '../TechnologiesItems';

const Technologies = () => {
    return (
     <div id="Technologies" style={{backgroundImage: `url(${bg})`}} className="pl-36 mx-auto bg-no-repeat bg-right-top">
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
        <TechnologiesItems/>
        <TechnologiesItems/>
        <TechnologiesItems/>
        <TechnologiesItems/>
      </div>
     </div>
    )
  }
  
  export default Technologies