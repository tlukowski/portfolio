import html from '../../assets/html.svg';

const TechnologiesItems = ({title,data} : {title:string,data: {image:string,title:string,experience:string}[]}) => {    
    
    return (
     <div>
        <div className='mt-24'>
          <div className='bg-white text-xl pl-5 font-bold py-1 tag h-10 inline-flex items-center'>           
            {title}
          </div>
        </div>
        <div className="grid grid-cols-2 mt-9 gap-y-9 gap-x-16">    
            {
                data.map((item, i) => (                    
                    <div key={i} className="flex gap-x-6">
                        <div>
                            <img src={item.image} alt=""></img>
                        </div>
                        <div className="text-white">
                            <div className="text-2xl">{item.title}</div>
                            <div className="text-xl opacity-50">{item.experience}</div>
                        </div>
                    </div>
                ))
            }
        </div>
     </div>
    )
  }
  
  export default TechnologiesItems