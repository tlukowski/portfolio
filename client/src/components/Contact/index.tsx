import contactLeft from '../../assets/contact-left.svg';
import contactRight from '../../assets/contact-right.svg';

const Contact = () => {
    return (
     <div className='flex mt-28 justify-between'>        
        <div style={{backgroundImage: `url(${contactLeft})`}} className='bg-no-repeat max-w-7xl pl-6 xl:pl-[9.375rem] bg-[left_top_1rem] xl:pb-[7.5rem]'>
            <div className='text-sugarpunch text-8xl leading-tight text-white z-10 relative mix-blend-difference'>
                WANT TO HAVE AN AWESOME PROJECT DONE?
            </div>
            <div className='mt-12'>
                <input placeholder='Enter your e-mail here' className='rounded-3xl border border-black py-[10px] px-6 w-full focus-visible:outline-none'>
                
                </input>
            </div>
        </div>
         <div className='hidden 2xl:block -mt-80'>
            <img src={contactRight} alt=""></img>
        </div>
     </div>
    )
  }
  
  export default Contact