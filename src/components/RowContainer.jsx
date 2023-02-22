import { MdShoppingBasket } from "react-icons/md"
import { motion } from 'framer-motion'
import { useEffect, useRef } from "react";


const RowContainer = ({ flag, data, btnScroll }) => {
    // console.log(data);

    const rowContainer = useRef();

    useEffect(() => {
        rowContainer.current.scrollLeft += btnScroll;
    }, [btnScroll]);
    return (
        <div
            ref={rowContainer}
            className={` w-full flex items-center my-12 scroll-smooth bg-rowBg
        ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}>
            {
                data && data.length > 0 ? (
                    data.map((item) => (
                        <>
                            <div
                                key={item?.id}
                                className="w-275 min-w-[250px] md:min-w-[235px] h-[275px] bg-cardOverlay rounded-lg
                                p-2 my-12 shadow-md backdrop-blur-lg hover:drop-shadow-lg mx-2 flex flex-col 
                                items-center justify-between ">
                                <div className="w-full flex items-center justify-between relative">
                                    <motion.img
                                        whileHover={{ scale: 1.2 }}
                                        src={item?.image} alt="Food_image"
                                        className="w-40 drop-shadow-xl" />
                                    <motion.div
                                        whileTap={{ scale: 0.75 }}
                                        className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center
                    cursor-pointer hover:shadow-md">
                                        <MdShoppingBasket className="text-white" />
                                    </motion.div>
                                </div>
                                <div className="w-full flex flex-col items-end justify-end ">
                                    <p className="text-base md:text-lg text-textColor font-semibold">
                                        {item?.title}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {item?.calories} <span>calories</span>
                                    </p>
                                    <div className="flex items-center gap-8">
                                        <p className="text-lg text-textColor font-semibold">
                                            <span className="text-sm text-red-500">$</span> {item?.price}
                                        </p>
                                    </div>
                                </div>
                            </div></>
                    ))
                ) : (
                    // if data is not available to this
                    <>
                        <div className="w-full flex flex-col items-center justify-center">
                            {/* <img src="Not Found" alt="image_not_found"
                                className="h-340" /> */}
                            <p className="text-xl text-headingColor font-semibold my-2">
                                Items are not available
                            </p>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default RowContainer