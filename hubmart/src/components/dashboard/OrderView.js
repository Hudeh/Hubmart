
import React,{useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchOrders } from '../../actions/cart/actions';
import { useDispatch } from 'react-redux';
const OrderView = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchOrders())
        return () => {
            // cleanup
        }
    }, [])
    return (
        <div className="not-active">
             <p>No order yet</p>
             <button>Browse Products 
                 <span style={{paddingLeft:"1rem"}}><FontAwesomeIcon icon='shopping-basket' /></span>
             </button>
         </div>
    )
}

export default OrderView