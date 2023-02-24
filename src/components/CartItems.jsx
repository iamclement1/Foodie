import { BiMinus, BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const CartItems = ({ item, flag, setFlag }) => {

    const [qty, setQty] = useState(item.qty);
    const [items, setItems] = useState([]);
    const [{ cartItems }, dispatch] = useStateValue();

    //update cart to ui with dispatch

    const cartDispatch = () => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        dispatch({
            type: actionType.SET_CART_ITEMS,
            cartItems: items,
        })
    }

    const updateQty = (action, id) => {
        if (action === "add") {
            setQty(qty + 1);
            cartItems.map((item) => {
                if (item.id === id) {
                    item.qty += 1;
                    setFlag(flag + 1);
                }
            });
            cartDispatch();
        } else {
            if (qty == 1) {
                setItems(cartItems.filter((item) => item.id !== id));
                setFlag(flag + 1);
                cartDispatch();
            } else {
                setQty(qty - 1);
                cartItems.map((item) => {
                    if (item.id === id) {
                        item.qty -= 1;
                        setFlag(flag + 1);
                    }
                });
                cartDispatch();
            }
        }
    }

    useEffect(() => {
        setItems(cartItems);
    }, [qty, items])
    return (
        <div>
            <div
                className='w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2'>
                <img src={item?.image} alt={item?.image}
                    className='w-20 h-20 max-w-[60px] rounded-full object-contain' />

                {/* name section */}
                <div className='flex flex-col gap-2'>
                    <p className='text-base text-gray-50'>
                        {
                            item?.title
                        }
                    </p>
                    <p className='text-sm block text-gray-300 font-semibold'>
                        $ <span> {parseFloat(item?.price) * qty} </span>
                    </p>
                </div>

                {/* button section */}

                <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        onClick={() => updateQty("remove", item?.id)}>
                        <BiMinus className="text-gray-50" />
                    </motion.div>

                    {/* quantity */}
                    <p className='w-5 p-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center'>
                        {qty}
                    </p>

                    <motion.div
                        whileTap={{ scale: 0.75 }}
                        onClick={() => updateQty("add", item?.id)}>
                        <BiPlus className="text-gray-50" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default CartItems