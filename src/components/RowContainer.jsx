import { MdShoppingBasket } from "react-icons/md"
import { motion } from 'framer-motion'
import { useEffect, useRef } from "react";


const RowContainer = ({ flag, data, btnScroll }) => {
    console.log(data);

    const rowContainer = useRef();

    useEffect(() => {
        rowContainer.current.scrollLeft += btnScroll;
    }, [btnScroll]);
    return (
        <div
            ref={rowContainer}
            className={` w-full flex items-center gap-4 my-12 scroll-smooth bg-rowBg
        ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}>
            {
                data && data.map(item => (
                    <div
                        key={item.id}
                        className="w-300 min-w-[300px] md:min-w-[340px] h-auto bg-cardOverlay rounded-lg p-2
            my-12 shadow-md backdrop-blur-lg hover:drop-shadow-lg">
                        <div className="w-full flex items-center justify-between">
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                src="https://firebasestorage.googleapis.com/v0/b/foodie-68c31.appspot.com/o/Images%2F1676723094690-r1.png?alt=media&token=b5efdabc-5d6a-4424-8c9a-b091b9d4b74b" alt="Food_image"
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
                                Chocolate & vanilla
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                                45 calories
                            </p>
                            <div className="flex items-center gap-8">
                                <p className="text-lg text-textColor font-semibold">
                                    <span className="text-sm text-red-500">$</span> 5.25
                                </p>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default RowContainer