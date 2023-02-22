import { useState } from 'react';
import { motion } from 'framer-motion';
import { IoFastFood } from 'react-icons/io5';
import { categoryData } from '../utils/CategoryData';

const MenuContainer = () => {
    const [filter, setFilter] = useState("chicken");



    return (
        <>
            <section className='w-full my-6' id='menu'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100
                    mr-auto">
                        Hot Dishes
                    </p>

                    <div className='w-full flex items-center justify-start md:justify-center lg:justify-center
                    gap-8 py-6 overflow-x-scroll scrollbar-none'>
                        {
                            categoryData && categoryData.map((category) => (
                                <motion.div
                                    whileTap={{ scale: 0.75 }}
                                    key={category.id}
                                    className={`group ${filter === category.url ? 'bg-cartNumBg' : "bg-card"} 
                                w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 justify-center hover:bg-cartNumBg`}
                                    onClick={() => setFilter(category.url)}>
                                    <div className={` w-10 h-10 rounded-full ${filter === category.url ? "bg-card" : "bg-cartNumBg"} group-hover:bg-white
                                            flex items-center justify-center m-auto mb-0 mt-0` }>
                                        <IoFastFood
                                            className={` ${filter === category.url ? " group:text-textColor" : "text-card"} group-hover:text-textColor text-lg`} />
                                    </div>
                                    <p className={`text-sm ${filter === category.url ? "text-white" : "text-textColor"} group-hover:text-white items-center
                                    text-center`}>
                                        {category.name}
                                    </p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuContainer