import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Shipping from './Shipping'
import Billing from './Billing'
import Login from '../auth/Login'
import OrderPreview from './OrderPreview'
import './styles/accountDetails.scss';

// getSteps = () => {
//   return ['Personal Information','Other Information', 'Room Details', 'Payment Information'];
// };

// getStepContent = (stepIndex) => {
//   switch (stepIndex) {
//     case 0:
//       return this.getPersonalInformation();
//     case 1:
//       return this.getOtherInformation();
//     case 2:
//       return this.getRoomDetails();
//     case 3:
//       return this.getPaymentInformation();

//     default:
//       return 'Uknown stepIndex';
//   }
// }

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        {page === 1 && <Billing onSubmit={this.nextPage} />}
        {page === 2 && (
          <Shipping
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <OrderPreview 
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    )
  }
}

CheckoutForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default CheckoutForm
