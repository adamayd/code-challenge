import React from 'react';
import PropTypes from 'prop-types';

const Detail = ({ singleProduct, monetaryModifier }) => (
  <div className="container bgwhite p-t-35 p-b-80">
    <div className="flex-w flex-sb">
      <div className="w-size13 p-t-30 respon5">
        <div className="wrap-slick3 flex-sb flex-w">

          <div className="item-slick3 main" data-thumb="images/thumb-item-01.jpg">
            <div className="wrap-pic-w">
              <img src={singleProduct.image} alt="IMG-PRODUCT" />
            </div>
          </div>

          <div className="slick3">
            <div className="item-slick3" data-thumb="images/thumb-item-01.jpg">
              <div className="wrap-pic-w">
                <img src="images/product-detail-01.jpg" alt="IMG-PRODUCT" />
              </div>
            </div>

            <div className="item-slick3" data-thumb="images/thumb-item-02.jpg">
              <div className="wrap-pic-w">
                <img src="images/product-detail-02.jpg" alt="IMG-PRODUCT" />
              </div>
            </div>

            <div className="item-slick3" data-thumb="images/thumb-item-03.jpg">
              <div className="wrap-pic-w">
                <img src="images/product-detail-03.jpg" alt="IMG-PRODUCT" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-size14 p-t-30 respon5">
        <h4 className="product-detail-name m-text16 p-b-13">{singleProduct.name}</h4>

        <span className="m-text17">{(singleProduct.price * monetaryModifier).toFixed(2)}</span>

        <p className="s-text8 p-t-10">{singleProduct.about}</p>

        {/* <!--  --> */}
        <div className="p-t-33 p-b-60">
          <div className="flex-m flex-w p-b-10">
            <div className="s-text15 w-size15 t-center">
              Size
            </div>

            <div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
              <select className="selection-2" name="size">
                <option>Choose an option</option>
                <option>Size S</option>
                <option>Size M</option>
                <option>Size L</option>
                <option>Size XL</option>
              </select>
            </div>
          </div>

          <div className="flex-m flex-w">
            <div className="s-text15 w-size15 t-center">
              Color
            </div>

            <div className="rs2-select2 rs3-select2 bo4 of-hidden w-size16">
              <select className="selection-2" name="color">
                <option>Choose an option</option>
                <option>Gray</option>
                <option>Red</option>
                <option>Black</option>
                <option>Blue</option>
              </select>
            </div>
          </div>

          <div className="flex-r-m flex-w p-t-10">
            <div className="w-size16 flex-m flex-w">
              <div className="flex-w bo5 of-hidden m-r-22 m-t-10 m-b-10">
                <button className="btn-num-product-down color1 flex-c-m size7 bg8 eff2" type="button">
                  <i className="fs-12 fa fa-minus" aria-hidden="true" />
                </button>

                <input className="size8 m-text18 t-center num-product" type="number" name="num-product" defaultValue="1" />

                <button className="btn-num-product-up color1 flex-c-m size7 bg8 eff2" type="button">
                  <i className="fs-12 fa fa-plus" aria-hidden="true" />
                </button>
              </div>

              <div className="btn-addcart-product-detail size9 trans-0-4 m-t-10 m-b-10">
                {/* <!-- Button --> */}
                <button className="flex-c-m sizefull bg1 bo-rad-23 hov1 s-text1 trans-0-4" type="submit">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-b-45">
          <span className="s-text8 m-r-35">SKU: MUG-01</span>
          <span className="s-text8">
            {`Categories: ${singleProduct.tags.map((tag) => tag).join(', ')}`}
          </span>
        </div>

        {/* <!--  --> */}
        <div className="wrap-dropdown-content bo6 p-t-15 p-b-14 active-dropdown-content">
          <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
            Description
            <i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true" />
            <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true" />
          </h5>

          <div className="dropdown-content dis-none p-t-15 p-b-23">
            <p className="s-text8">
              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
            </p>
          </div>
        </div>

        <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
          <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
            Additional information
            <i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true" />
            <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true" />
          </h5>

          <div className="dropdown-content dis-none p-t-15 p-b-23">
            <p className="s-text8">
              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
            </p>
          </div>
        </div>

        <div className="wrap-dropdown-content bo7 p-t-15 p-b-14">
          <h5 className="js-toggle-dropdown-content flex-sb-m cs-pointer m-text19 color0-hov trans-0-4">
            Reviews (0)
            <i className="down-mark fs-12 color1 fa fa-minus dis-none" aria-hidden="true" />
            <i className="up-mark fs-12 color1 fa fa-plus" aria-hidden="true" />
          </h5>

          <div className="dropdown-content dis-none p-t-15 p-b-23">
            <p className="s-text8">
              Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Detail.propTypes = {
  singleProduct: PropTypes.shape.isRequired,
  monetaryModifier: PropTypes.number.isRequired
};

export default Detail;
