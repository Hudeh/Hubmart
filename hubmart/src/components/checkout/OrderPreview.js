import React from 'react'
import {reduxForm} from 'redux-form'

function OrderPreview() {
    return (
        <div>
            oder view
        </div>
    )
}
export default reduxForm({
    form: 'checkoutform',
    destroyOnUnmount: false, 
  forceUnregisterOnUnmount: true, 
})(OrderPreview)