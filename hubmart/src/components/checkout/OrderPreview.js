import React from 'react'
import {reduxForm} from 'redux-form'

function OrderPreview(props) {
    const {previousPage} = props
    return (
        <div>
            <button type='button' onClick={previousPage}> Back</button>
        </div>
    )
}
export default reduxForm({
    form: 'checkoutform',
    destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true, 
})(OrderPreview)