import { BsFillCartFill  } from 'react-icons/bs';
import './CartWidget.css'


const CartWidget = () =>{

    return <>
        <div className='relative'>
            <BsFillCartFill className='icon ico-cart is-normal has-text-info text-white hover:text-second transition-all duration-200 cursor-pointer text-2xl absolute'/>
            <span className="text-main left-2.5 top-1.5 absolute bottom-0 text-xs cursor-pointer pointer-events-none">3</span>
        </div>
    </>
}

export default CartWidget