import Logo from '../assets/img/logo.png';
import Avatar from '../assets/img/avatar.png';
import { IoMdCart } from 'react-icons/io';
import { MdAdd, MdLogout } from 'react-icons/md';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from "../context/reducer";
import { useState } from 'react';

const Navbar = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    //dispatch providerData by using the useStateValue custome hook I created in the context folder
    const [{ user }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false);

    const Login = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            //dispatch providerData
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]
            });
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu)
        }
    };

    const Logout = () => {
        setIsMenu(false);
        localStorage.removeItem('user');

        dispatch({
            type: actionType.SET_USER,
            user: null,
        })
    }
    return (
        <header className='fixed z-50 w-screen p-6 px-16 ' >
            {/* desktop & tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between' >
                <Link to={'/'} className="flex items-center gap-2">
                    <img src={Logo} alt="Logo" className='w-10 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>
                        Foodie
                    </p>
                </Link>

                <div className="flex items-center gap-8">
                    {/* navlinks list */}
                    <ul className='flex items-center gap-6'>
                        <li className="text-lg text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer">
                            Home
                        </li>
                        <li className="text-lg text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer">
                            Menu
                        </li>
                        <li className="text-lg text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer">
                            About Us
                        </li>
                        <li className="text-lg text-textColor hover:text-headingColor duration-100 
                        transition-all ease-in-out cursor-pointer">
                            Service
                        </li>
                    </ul>

                    {/* cart icon */}
                    <div className="relative flex items-start justify-center">
                        <IoMdCart className='text-textColor text-2xl cursor-pointer' />
                        <div className='absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className="text-xs text-white font-semibold"> 2 </p>
                        </div>
                    </div>

                    {/* avatarImage + framer motion to tapping */}
                    <div className="relative">
                        <motion.img
                            whileTap={{ scale: 0.6 }}
                            src={user ? user.photoURL : Avatar} //if user is signed in display user image.
                            alt="user__profile"
                            className='w-10 min-w-[40px] h-10 min-h-[40x] drop-shadow-2xl cursor-pointer rounded-full'
                            onClick={Login} />

                        {
                            isMenu && (
                                <div className='flex flex-col w-40 bg-primary shadow-xl rounded-lg absolute
                        top-12 right-0 '>
                                    {/* render this only if the user is an admin */}
                                    {
                                        user && user.email === 'blessedmarcel1@gmail.com' && (
                                            <Link to={'/createItem'}>
                                                <p className='flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100
                            transition-all duration-100 ease-in-out text-textColor text-base'>
                                                    New Item <MdAdd />
                                                </p>
                                            </Link>
                                        )
                                    }
                                    <p className='flex items-center px-4 py-2 gap-3 cursor-pointer hover:bg-slate-100
                            transition-all duration-100 ease-in-out text-textColor text-base'
                                        onClick={Logout}>
                                        Logout <MdLogout />
                                    </p>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>


            {/* mobile phone  */}
            <div className="flex md:hidden w-full h-full bg-blue-500 p-5" ></div>
        </header>
    )
}

export default Navbar