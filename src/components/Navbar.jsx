import Logo from '../assets/img/logo.png';
import Avatar from '../assets/img/avatar.png';
import { BsCart3 } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';

const Navbar = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const Login = async () => {
        const response = await signInWithPopup(firebaseAuth, provider)
        console.log(response);
    };
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
                        <BsCart3 className='text-textColor text-2xl cursor-pointer' />
                        <div className='absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className="text-xs text-white font-semibold"> 2 </p>
                        </div>
                    </div>

                    {/* avatarImage + framer motion to tapping */}
                    <div className="relative">
                        <motion.img
                            whileTap={{ scale: 0.6 }} src={Avatar} alt="user__profile" className='w-10 min-w-[40px] h-10 min-h-[40x] drop-shadow-2xl cursor-pointer ' 
                            onClick={Login}/>
                    </div>
                </div>

            </div>


            {/* mobile phone  */}
            <div className="flex md:hidden w-full h-full bg-blue-500 p-5" ></div>
        </header>
    )
}

export default Navbar