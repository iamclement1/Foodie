import { useState } from 'react';
import Logo from '../assets/img/foodie.png';
import { FaSpinner } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useStateValue } from '../context/StateProvider';
import { app } from '../firebase.config';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { actionType } from '../context/reducer';
import { Link } from 'react-router-dom'

const SignIn = () => {

    const firebaseAuth = getAuth(app);
    const provider = new GoogleAuthProvider();

    //dispatch providerData by using the useStateValue custome hook I created in the context folder
    const [{ user }, dispatch] = useStateValue();
    const [isLoading, setIsLoading] = useState(false);
    const [isMenu, setIsMenu] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();


    const handleSubmit = () => {
        setIsLoading(true);
        setError("");
        signInWithEmailAndPassword(firebaseAuth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }

    const signInWithGoogle = async () => {
        if (!user) {
            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            //dispatch providerData
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0],
            });
            navigate('/');
            localStorage.setItem('user', JSON.stringify(providerData[0]));
        } else {
            setIsMenu(!isMenu)
        }

    }
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <div className='w-[90%] md:w-[45%] rounded-lg p-4
            flex flex-col items-center justify-center 
            shadow-md bg-white '>
                    <img src={Logo} alt="icon" className='h-20 w-20' />
                    <div className="w-full max-w-sm">
                        <form action="">
                            {error ? <p className="p-3 bg-red-300 my-2"> {error} </p> : null}

                            {/* email input div */}
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm
                                font-bols mb-2">Email Address</label>
                                <input type="email" placeholder="Email Address"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline"
                                    onChange={(event) => setEmail(event.target.value)} />
                            </div>


                            {/* password input div */}
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-gray-700 text-sm
                                font-bols mb-2">Password</label>
                                <input type="password" placeholder="************"
                                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700
                                leading-tight focus:outline-none focus:shadow-outline"
                                autoComplete='current-password'
                                    onChange={(event) => setPassword(event.target.value)} />
                            </div>

                            {/* login button */}
                            <div className="md:flex items-center justify-between text-center">
                                {!isLoading && (
                                    <button className='w-full md:w-36 border-none
                                            outline-none bg-orange-300 hover:bg-orange-500 px-12 py-2 rounded-lg 
                                            text-lg text-white w-wfull border'
                                        onClick={handleSubmit}>Login</button>
                                )}

                                {
                                    isLoading && (
                                        <button className=' w-full md:w-36 border-none
                                        outline-none bg-orange-500 px-12 py-2 rounded-lg 
                                        text-lg text-white flex items-center' disabled>
                                            <FaSpinner className="spinner space-x-4 mx-auto text-xl mr-3" />
                                            <span className='text-sm'>loading...</span>
                                        </button>
                                    )
                                }
                                <Link to={"/forget-password"}>
                                    <span className="py-3 md:py-0 text-xs text-gray-500 
                                    underline cursor-pointer" type="button">Forgot Password?</span>
                                </Link>
                            </div>

                            <div className='mt-5'>
                                <hr className='' />
                                <p className='w-8 h-8 rounded-full flex items-center justify-center
                                bg-gray-300 mx-auto relative bottom-4 text-sm font-bold'>Or</p>
                            </div>

                            {/* login with Googlge */}
                            <motion.div
                                whileTap={{ scale: 0.75 }}
                                className='md:w-64 flex items-center justify-center bg-orange-500 mt-3
                            mx-auto px-3 py-3 space-x-4 rounded cursor-pointer text-white'
                                onClick={signInWithGoogle}>
                                <FcGoogle className='text-2xl' />
                                <span>Sign in with Google</span>
                            </motion.div>

                            {/* Dont have an account */}
                            <div className='flex items-center justify-center py-6 text-sm'>
                                <p
                                    className='text-gray-600'>Don't have an account?
                                </p>
                                <motion.p
                                    whileTap={{ scale: 0.8 }}
                                    className='text-orange-500 ml-2 cursor-pointer underline'>
                                    <Link to={"/register"}>
                                        Sign up
                                    </Link>
                                </motion.p>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn