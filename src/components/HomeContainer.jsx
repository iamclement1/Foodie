import Bike from '../assets/img/delivery.png';


const HomeContainer = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
                <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
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
            <div className="py-2 flex-1"></div>
        </div>
    )
}

export default HomeContainer