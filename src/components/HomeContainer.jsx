import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { heroData } from '../utils/data';


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
    <div className='py-2 gap-4 flex-1 flex flex-col items-start justify-center'>
      <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>

        <p className='font-semibold text-base text-orange-600'>Bike Delivery</p>
        <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <img src={Delivery} className="w-full h-full object-contain" alt="" />
        </div>

      </div>
      <p className='text-[2rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor '>
        The Fastest Delivery In <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>

      <p className='text-textColor text-base text-center md:text-left md:w-[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, laboriosam incidunt! Molestias eius, eveniet nisi nobis ratione delectus nesciunt
         sint quibusdam soluta consectetur quaerat, praesentium eligendi incidunt, distinctio perferendis maiores!</p>

         <button className='bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg
         hover:shadow-lg transition-all ease-in-out duration-100 md:w-auto' type='button'>Order Now</button>  
    </div>
    <div className='py-2 flex-1 flex items-center relative'>
       
        <img src={HeroBg} className="h-420 ml-auto w-full lg:w-auto lg:h-650" alt="hero-bg" />

        <div className='w-full h-full absolute top-0 left-0 py-4 lg:px-16 xl:px-30 flex items-center justify-center gap-4 
        flex-wrap  '>
            {heroData && heroData.map(n=>(
                    <div key={n.id} className='lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl
                    flex flex-col items-center justify-center'>
                        <img src={n.imagesrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="I1" />
                        <p className='text-base lg:text-lg font-semibold text-textColor'>{n.name}</p>
                        <p className='text-[10px] lg:text-sm font-semibold text-lighttextGray my-1 lg:my-2'>{n.desc}</p>
                        <p className='text-sm font-semibold text-headingColor'>
                            <span className='text-xs text-red-500'>Rs.</span>{n.price}</p>
                    </div>
            ))} 
        </div>
      

    </div>
  </section>
  );
};

export default HomeContainer;