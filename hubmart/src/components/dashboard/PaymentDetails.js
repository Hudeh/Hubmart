import React from 'react'

export default function PaymentDetails(props) {
    return (
        <>
            <div className="not-active">
                <p>No saved method found </p>
            </div>
            <div className='add-payment-method'>
                <button>Add Payment Method</button>
            </div>
        </>
    )
}
