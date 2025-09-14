import React from 'react';
import { useRouter } from 'next/router';
import Link from "next/link";  
const PaymentCancelled = () => {
  const router = useRouter();  

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Payment Cancelled</h1>
      <p style={{padding: 20}}>Your payment was not completed. If this was a mistake, please return to homepage.</p>
      
      <Link
        href={'/'} 
        style={{
          padding: '10px 20px',
          backgroundColor: '#2d6dc4',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Home
      </Link>
    
    </div>
  );
};

export default PaymentCancelled;
