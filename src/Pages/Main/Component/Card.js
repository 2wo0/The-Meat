import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

class Card extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="mdContents">
        <div className="mdImgCartBox">
          {data.discount_rate ? (
            <span className="mdSale">
              <p className="mdDiscount">{data.discount_rate} %</p>
            </span>
          ) : null}
          <img className="mdContentsImg" src={data.image_url} alt="추천상품" />
          <div className="mdCartButton">
            <Link to="/">
              <i className="fas fa-shopping-cart"></i>
            </Link>
          </div>
        </div>
        <div className="mdInfo">
          <div className="mdSubjectBox">
            <p className="mdSubject">{data.name}</p>
          </div>
          <div className="mdPriceBox">
            <p className="mdPrice">
              <span className="fontBold">{data.real_price}</span>원
            </p>
            {data.price ? (
              <span className="priceDiscount">{data.price}원</span>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;