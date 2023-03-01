import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from '../assets/img/foodie.png';


const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = () => {

    };
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <div className='w-[90%] md:w-[45%] rounded-lg p-4
            flex flex-col items-center justify-center gap-4
            shadow-md bg-white'>
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
                                    <button className='w-full border-none
                                            outline-none bg-orange-300 hover:bg-orange-500 px-12 py-2 rounded-lg 
                                            text-lg text-white w-wfull border'
                                        onClick={handleSubmit}>Sign up</button>
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
                                
                            </div>



                            {/* Already have an account? */}
                            <div className='flex items-center justify-center py-6 text-sm'>
                                <p
                                    className='text-gray-600'>Already have an account?
                                </p>
                                <motion.p
                                    whileTap={{ scale: 0.8 }}
                                    className='text-orange-500 ml-2 cursor-pointer underline'>
                                    <Link to={"/login"}>
                                        Sign in
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

export default SignUp