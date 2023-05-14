import html from '../../assets/html.svg';

const TechnologiesItems = () => {
    return (
     <>
        <div className='mt-24'>
          <div className='bg-white text-xl pl-5 font-bold py-1 tag h-10 inline-flex items-center'>
            Web
          </div>
        </div>
        <div className="grid grid-cols-2 mt-6 gap-y-9 gap-x-16">
            <div className="flex gap-x-6">
                <div>
                    <img src={html} alt=""></img>
                </div>
                <div className="text-white">
                    <div className="text-2xl">HTML</div>
                    <div className="text-xl opacity-50">+1 year experience</div>
                </div>
            </div>
            <div className="flex gap-x-6">
                <div>
                    <img src={html} alt=""></img>
                </div>
                <div className="text-white">
                    <div className="text-2xl">HTML</div>
                    <div className="text-xl opacity-50">+1 year experience</div>
                </div>
            </div>
            <div className="flex gap-x-6">
                <div>
                    <img src={html} alt=""></img>
                </div>
                <div className="text-white">
                    <div className="text-2xl">HTML</div>
                    <div className="text-xl opacity-50">+1 year experience</div>
                </div>
            </div>
            <div className="flex gap-x-6">
                <div>
                    <img src={html} alt=""></img>
                </div>
                <div className="text-white">
                    <div className="text-2xl">HTML</div>
                    <div className="text-xl opacity-50">+1 year experience</div>
                </div>
            </div>
        </div>
     </>
    )
  }
  
  export default TechnologiesItems