import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'
import { BsBagCheckFill } from "react-icons/bs";
import runConfetti from '@/lib/utils';
const  Success = () => {
    const{setCartItems,setTotalPrice,setTotalQuantities}=useStateContext();

    useEffect(()=>{
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runConfetti()
    },[])
    return (
    <div className="success-wrapper">
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your purchase</h2>
            <p className='email-msg'>
                Check your inbox for the receipt
            </p>
            <p className='description'>
                If you have any questions,please email
                <a className='email' href='mailto:stella@mail.com'>
                stella@mail.com
                </a>
            </p>
            <Link href='/'>
             <button type='button' width='300px' className='btn'>
                Continue Shopping
             </button>
            </Link>
        </div>
    </div>
  )
}
export default Success;