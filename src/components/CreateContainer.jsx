import { motion } from 'framer-motion'
import { useState } from 'react';
import {
    MdFastfood,
    MdCloudUpload,
    MdDelete,
    MdFoodBank,
    MdAttachMoney
} from 'react-icons/md';
import { storage } from '../firebase.config';
import { categoryData } from '../utils/CategoryData';
import Loader from './Loader';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const CreateContainer = () => {


    //state management
    const [title, setTitle] = useState("");
    const [calories, setCalories] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState(null);
    const [imageAsset, setImageAsset] = useState(null);
    const [fields, setFields] = useState(false);
    const [alertStatus, setAlertStatus] = useState("danger");
    const [msg, setMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    // const [{ foodItems }, dispatch] = useStateValue();

    // callback function
    const uploadImage = (e) => {
        setIsLoading(true);
        const imageFile = e.target.files[0];
        // console.log(imageFile);
        const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`)
        const uploadTask = uploadBytesResumable(storageRef, imageFile); //uploadBytesResumable from firebase storage

        //to calculate the size of the uploaded image
        uploadTask.on('state_changed', (snapshot) => {
            const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (error) => {
            console.log(error);
            setFields(true);
            // setMsg(error.message);
            setMsg('Error uploading image : Try again 🙇');
            setAlertStatus("danger");
            //remove alert 
            setTimeout(() => {
                setFields(false);
                setIsLoading(false);
            }, 4000)
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setImageAsset(downloadURL);
                setIsLoading(false);
                setFields(true);
                setMsg('Image Uploaded Successfully 😊');
                setAlertStatus('success');
                setTimeout(() => {
                    setFields(false);

                }, 4000);
            });
        });
    }

    //delete image

    const deleteImage = () => {
    };

    //save details function
    const saveDetails = () => { };

    return (
        <div className='w-full min-h-screen flex items-center justify-center' >
            <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4
            flex flex-col items-center justify-center gap-4'>
                {
                    fields && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus === "danger" ? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800'}`}>
                            { msg }
                        </motion.p>
                    )
                }

                <div className='w-full py-2 border-b border-gray-300 flex items-center
                gap-3'>
                    <MdFastfood className="text-xl text-gray-700 " />
                    <input
                        type="text"
                        name="" id=""
                        value={title}
                        placeholder='Food title...'
                        required
                        onChange={(e) => setTitle(e.target.value)}
                        className=' w-full h-full text-lg bg-transparent outline-none border-none
                        placeholder:text-gray-400 text-textColor ' />
                </div>

                {/* select category division */}
                <div className="w-full  ">
                    <select name="" id=""
                        onChange={(e) => setCategory(e.target.value)}
                        className='outline-none w-full text-base border-b-2 border-gray-300 p-2 rounded-md cursor-pointer'>
                        <option value="other" className='bg-white'>
                            Select Category
                        </option>
                        {
                            categoryData && categoryData.map((item) => (
                                <option key={item.id}
                                    className='text-base border-0 outline-none capitalize bg-white text-textColor '
                                    value={item.url} >
                                    {item.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                {/* image upload */}
                <div className="group flex justify-center items-center flex-col border-2
                border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg ">
                    {/* if loading is tru show loader else show the react fragment */}
                    {
                        isLoading ? <Loader /> : (
                            <>
                                {/* if imageAsset is null do this otherwise do this */}
                                {
                                    !imageAsset ? (
                                        <>
                                            <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                                                <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                                    <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                                                    <p className="text-gray-500 hover:text-gray-700">
                                                        Click here to upload
                                                    </p>
                                                </div>
                                                <input
                                                    type="file"
                                                    name="uploadimage"
                                                    accept="image/*"
                                                    onChange={uploadImage}
                                                    className="w-0 h-0"
                                                />
                                            </label>
                                        </>
                                    ) :
                                        (
                                            <>
                                                <div className='relative h-full '>
                                                    {/* would display if an image is already available */}
                                                    <img src={imageAsset} alt="uploaded image" className='w-full h-full object-cover' />
                                                    <button type='button'
                                                        className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500
                                    text-xl cursor-pointer outline-none
                                    hover:shadow-md duration-500 transition-all ease-in-out'
                                                        onClick={deleteImage}>
                                                        <MdDelete className='text-white' />
                                                    </button>
                                                </div>
                                            </>
                                        )}
                            </>
                        )}
                </div>

                {/* //product calories */}
                <div className='w-full flex flex-col md:flex-row items-center gap-3'>
                    <div className='w-full py-3 border-b border-gray-300 flex items-center gap-2'>
                        <MdFoodBank className='text-gray-700 text-2xl' />
                        <input type="text"
                            placeholder='Calories'
                            value={calories}
                            onChange={(e) => setCalories(e.target.value)}
                            required
                            className=' w-full h-full text-lg bg-transparent outline-none border-none
                            placeholder:text-gray-400 text-textColor ' />
                    </div>

                    {/* product price */}
                    <div className='w-full py-3 border-b border-gray-300 flex items-center gap-2'>
                        <MdAttachMoney className='text-gray-700 text-2xl' />
                        <input type="text"
                            placeholder='Calories'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            required
                            className=' w-full h-full text-lg bg-transparent outline-none border-none
                            placeholder:text-gray-400 text-textColor ' />
                    </div>
                </div>

                {/* save items button/division */}
                <div className='flex items-center w-full  '>
                    <button type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none
                    outline-none bg-emerald-400 hover:bg-emerald-800 px-12 py-2 rounded-lg text-lg text-white
                    font-semibold' 
                    onClick={ saveDetails }>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateContainer