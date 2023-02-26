import Bike from '../assets/img/delivery.png';
import HeroBG from '../assets/img/heroBg.png';
import { heroData } from '../utils/HeroData';


const HomeContainer = () => {

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-auto' id='home'>
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full
                mt-8 md:mt-0'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>

                    {/* Bike delivery image */}

                    <div className='w-6 h-6 rounded-full overflow-hidden bg-white drop-shadow-xl'>
                        <img src={Bike} alt="delievery_bike" className='w-full h-full object-contain' />
                    </div>
                </div>

                <p className='text-[2.5rem] font-bold tracking-wide text-headingColor'>
                    The Fastest Delivery You Can <span className='text-orange-600 text-[3rem]'>Trust</span>
                </p>

                <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius repudiandae maxime minus iusto minima consequuntur illo repellat, qui exercitationem quos. Quia, quas eveniet. Totam, expedita aspernatur odio architecto nesciunt aut eveniet harum corporis fugit unde.
                </p>

                <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full
                md:w-auto px-4 py-2 rounded-md hover:shadow-lg transition-all ease-in-out duration-100'>
                    Order Now
                </button>

            </div>
            <div className="py-2 flex-1 flex items-center relative w-full">
                <img src={HeroBG}
                    className='ml-auto h-420 lg:h-650 w-full lg:w-auto' alt="hero_bg" />
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center 
                lg:px-6 py-4 gap-4 flex-wrap'>
                    {
                        heroData && heroData.map((n) => (
                            <div key={n.id} className="lg:w-190  p-4 bg-cardOverlay backdrop-blur-md 
                            rounded-3xl flex flex-col items-center">
                                <img src={n.img} alt="" className='w-20 lg:w-40 -mt-10 lg:-mt-20' />
                                <p className='text-base font-semibold text-textColor'>
                                    {
                                        n.name
                                    }
                                </p>
                                <p className='text-[10px] lg:text-sm text-gray-400 font-semibold my-1'>
                                    {
                                        n.despcription
                                    }
                                </p>
                                <p className='text-sm font-semibold text-headingColor'>
                                    <span className='text-xs text-red-600'>$</span> {
                                        n.price
                                    }
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default HomeContainer