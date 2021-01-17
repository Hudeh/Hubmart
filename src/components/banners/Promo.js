import React from "react";
import voucher1 from "../../assets/images/hubdeli_feature1.jpg";
import voucher2 from "../../assets/images/bakery_feature.jpg";
import voucher3 from "../../assets/images/skincare_feature-2.jpg";
import voucher4 from "../../assets/images/produce_feature-1.jpg";
import voucher5 from "../../assets/images/homeoffice_feature.jpg";
import "./styles/promo.scss";
import { withRouter } from "react-router-dom";

const Promo = (history) => {
  return (
    <div className="promo">
      <div className="first-div-promo">
        <img src={voucher1} alt="v1" className="v1" />
        <img src={voucher2} alt="v2" className="v2" />
      </div>
      <div className="second-div-promo">
        <div className="first-div">
            <img src={voucher2} alt="v1"className="v3"/>
            <img src={voucher3} alt="v1"className="v4" />
        </div>
        <div className='sec-div'>
          <img src={voucher4} alt="v1" className="v5"/>
          <img src={voucher5} alt="v1" className="v6" />
        </div>
      </div>
    </div>
  );
}
export default withRouter(Promo)