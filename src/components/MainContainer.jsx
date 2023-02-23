import HomeContainer from "./HomeContainer";
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import { useEffect, useRef, useState } from "react";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";


const MainContainer = () => {

    const [ {foodItems, cartShow}, dispatch ] = useStateValue();
    const [ btnScroll, setBtnScroll ] = useState(0);  

    useEffect(() => {}, [ setBtnScroll, cartShow ]);
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <HomeContainer />
            <section className="w-full my-6">
                <div className="w-full flex items-center justify-between">
                    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
                        Fresh & healthy fruits
                    </p>
                    <div className="hidden md:flex gap-3 items-center ">
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer flex
                        items-center justify-center hover:shadow-lg"
                        onClick={() => setBtnScroll(-200)}>
                            <MdChevronLeft className="text-lg text-white" />
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer flex
                        items-center justify-center transition-all duration-100 ease-in-out hover:shadow-lg">
                            <MdChevronRight className="text-lg text-white"
                            onClick={() => setBtnScroll(200)}/>
                        </motion.div>
                    </div>
                </div>

                {/* set a flag to true it'll ask for food section if false main menu */}
                <RowContainer flag={true} 
                data={foodItems?.filter(
                    n => n.category === 'fruits'
                )}
                btnScroll = { btnScroll }/>
            </section>

            {/* menu container */}
            <MenuContainer />

            {/* cart container */}
            {
                cartShow && (
                    <CartContainer />
                )
            }
        </div>
    )
}

export default MainContainer;