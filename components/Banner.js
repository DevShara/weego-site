// import heroImage from '/web-banner.png'
import Image from 'next/image'


const Banner = () => {
    return(
        <div className='  '>
            
      <img src='/web-banner.png' className='w-full h-auto overflow-hidden'/>
        </div>
        // <div className="bg-[url('../public/web-banner.png')] bg-no-repeat bg-contain	 md:bg-cover bg-center w-full  h-32 md:h-96 "></div>
    )
}

export default Banner;