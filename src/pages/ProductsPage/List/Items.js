import React from "react";
import PropTypes from "prop-types";
import { format as moneyFormat } from "money-formatter";

import StarRating from "../../components/ui/StarRating";
import CircularProgress from "../../components/ui/Progress/Circular";
import { productType } from "../../components/types";

class ProductListItems extends React.PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(productType)).isRequired,
    onItemClick: PropTypes.func
  };

  handleItemClick = item => ev => {
    this.props.onItemClick(item);
  };

  renderSizes = sizes => {
    if (sizes && sizes.length) {
      return (
        <ul className="product-item__sizes">
          {sizes.map((size, i) => (
            <li key={i}>
              <div className="product-size">{size}</div>
            </li>
          ))}
        </ul>
      );
    }
    return null;
  };

  renderItem = item => {
    const { id, name, picture, brand, price, oldPrice, specialPrice, currency, sizes, rating, comments, isNew } = item;
    let discount = null;

    if (oldPrice && oldPrice > 0 && specialPrice && specialPrice > 0) {
      discount = Math.round(((oldPrice - specialPrice) / oldPrice) * 100);
    }

    return (
      <li className="product-list-item" key={id}>
        <div className="product-item__content">
          <a role="presentation" className="product-item__img" onClick={this.handleItemClick(item)}>
            <img src={picture} alt={name} title={name} />
          </a>
          <h4 className="product-item__head">
            <div className="product-item__brand">{brand}</div>
            <div className="product-item__name">{name}</div>
          </h4>
          {price && <div className="product-item__price product-price">{moneyFormat(currency, price)}</div>}
          {oldPrice &&
            specialPrice && (
              <div className="product-prices">
                <div className="product-item__price product-price product-price--old">
                  {moneyFormat(currency, oldPrice)}
                </div>
                <div className="product-item__price product-price product-price--special">
                  {moneyFormat(currency, specialPrice)}
                </div>
              </div>
            )}
          {discount && (
            <div className="product-item__flag">
              <div className="product-flag product-flag--hot">-{discount}%</div>
            </div>
          )}
          {isNew &&
            !discount && (
              <div className="product-item__flag">
                <div className="product-flag product-flag--new">New</div>
              </div>
            )}
          <button className="product-item__button-float icon icon-favorite_border" />

          <div className="product-item__hidden-content">
            {this.renderSizes(sizes)}
            <div className="product-item__ratings">
              {rating && <StarRating selected={rating} />}
              {comments && <div className="product-item__comments icon icon-chat_bubble_outline">{comments}</div>}
            </div>
          </div>
        </div>
      </li>
    );
  };

  render() {
    const { data } = this.props;

    return <ul className="product-list__content">{data.map(item => this.renderItem(item))}</ul>;
  }
}

export default ProductListItems;
