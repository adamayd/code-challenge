import React from 'react';
import Link from 'next/link';

const Product = ({ product, monetaryModifier }) => {
    return (
                <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    {/*<!-- Block2 -->*/}
                    <div className="block2">
                        <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                            <img src={product.image} alt="IMG-PRODUCT"/>

                            <div className="block2-overlay trans-0-4">
                                <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                                    <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                                    <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                                </a>

                                <div className="block2-btn-addcart w-size1 trans-0-4">
                                    {/*<!-- Button -->*/}
                                    <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="block2-txt p-t-20">
                            {/*<Link href="/product-detail">*/}
                            <Link href={{
                                pathname: "/product-detail",
                                query: { guid: product.guid }
                            }}>
                                <a href="#" className="block2-name dis-block s-text3 p-b-5">{product.name}</a>
                            </Link>

                            {product.oldPrice 
                                ? (<>
                                        <span class="block2-oldprice m-text7 p-r-5">{(product.oldPrice * monetaryModifier).toFixed(2)}</span>
                                        <span class="block2-newprice m-text8 p-r-5">{(product.price * monetaryModifier).toFixed(2)}</span>
                                    </>)
                                : <span className="block2-price m-text6 p-r-5">{(product.price * monetaryModifier).toFixed(2)}</span>
                            }
                        </div>
                    </div>
                </div>
    )
}

export default Product;