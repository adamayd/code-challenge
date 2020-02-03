import React, { useState, useEffect } from 'react';
import Product from './product';

const Content = ({ unsortedProducts, getProducts, monetaryModifier }) => {
  const [priceRange, setPriceRange] = useState([0, 0]);
  const [products, setProducts] = useState(unsortedProducts);
  const [priceRangeFilter, setPriceRangeFilter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    getPriceRange();
  }, []);

  const sortByPrice = (lowPrice, highPrice, allProducts = true) => {
    const unsorted = allProducts
      ? JSON.parse(JSON.stringify(unsortedProducts))
      : JSON.parse(JSON.stringify(products));
    let sortedProducts;
    if (highPrice === 0) {
      sortedProducts = unsorted.filter((product) => parseFloat(product.price) >= lowPrice);
    } else {
      sortedProducts = unsorted.filter((product) => parseFloat(product.price) >= lowPrice && parseFloat(product.price) <= highPrice);
    }
    setProducts(sortedProducts);
  };

  const sortByPriceDirection = (asc) => {
    const unsorted = JSON.parse(JSON.stringify(products));
    const sortedProducts = unsorted.sort((productA, productB) => (asc
      ? productA.price - productB.price
      : productB.price - productA.price
    ));
    setProducts(sortedProducts);
  };

  const sortBySearchTerm = () => {
    const unsorted = JSON.parse(JSON.stringify(unsortedProducts));
    const lowerSearchTerm = searchTerm.toLowerCase();
    const sortedProducts = unsorted.filter((product) => {
      if (product.name.toLowerCase().includes(lowerSearchTerm)) return product;
      if (product.about.toLowerCase().includes(lowerSearchTerm)) return product;
      if (product.tags.reduce((tagHolder, tag) => tagHolder + tag)
        .toLowerCase().includes(lowerSearchTerm)) return product;
    });
    setProducts(sortedProducts);
  };

  const getPriceRange = () => {
    const prices = products.map((product) => product.price).sort((a, b) => a - b);
    setPriceRange([parseFloat(prices[0]), parseFloat(prices[prices.length - 1])]);
  };

  const handleOptionSort = (ev) => {
    switch (ev.target.value) {
      case 'asc':
        sortByPriceDirection(true);
        break;
      case 'desc':
        sortByPriceDirection(false);
        break;
      case 'pop':
        console.log('Sort By Popularity'); // eslint-disable-line no-console
        break;
      default:
        getProducts();
        setProducts(unsortedProducts);
    }
  };

  const handlePriceSort = (ev) => {
    switch (ev.target.value) {
      case '0-50':
        sortByPrice(0, 50);
        break;
      case '50-100':
        sortByPrice(50, 100);
        break;
      case '100-150':
        sortByPrice(100, 150);
        break;
      case '150-200':
        sortByPrice(150, 200);
        break;
      case '200+':
        sortByPrice(200, 0);
        break;
      default:
        getProducts();
        setProducts(unsortedProducts);
    }
  };

  const handleRangeFilter = () => {
    sortByPrice(0, priceRangeFilter, false);
  };

  const handleClickSearchButton = () => {
    if (searchTerm === "") setProducts(unsortedProducts);
    else sortBySearchTerm();
  };

  return (
    <section className="bgwhite p-t-55 p-b-65">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
            <div className="leftbar p-r-20 p-r-0-sm">
              {/* <!--  --> */}
              <h4 className="m-text14 p-b-7">
                Categories
              </h4>

              <ul className="p-b-54">
                <li className="p-t-4">
                  <a href="#" className="s-text13 active1">
                    All
                  </a>
                </li>

                <li className="p-t-4">
                  <a href="#" className="s-text13">
                    Women
                  </a>
                </li>

                <li className="p-t-4">
                  <a href="#" className="s-text13">
                    Men
                  </a>
                </li>

                <li className="p-t-4">
                  <a href="#" className="s-text13">
                    Kids
                  </a>
                </li>

                <li className="p-t-4">
                  <a href="#" className="s-text13">
                    Accesories
                  </a>
                </li>
              </ul>

              {/* <!--  --> */}
              <h4 className="m-text14 p-b-32">
                Filters
              </h4>

              <div className="filter-price p-t-22 p-b-50 bo3">
                <div className="m-text15 p-b-17">
                  Price
                </div>

                <div className="wra-filter-bar">
                  <input
                    type="range"
                    min={(priceRange[0] * monetaryModifier).toFixed(2)}
                    max={((priceRange[1] * monetaryModifier).toFixed(2) + 10.0)}
                    onChange={(ev) => setPriceRangeFilter(ev.target.value)}
                  />
                </div>

                <div className="flex-sb-m flex-w p-t-16">
                  <div className="w-size11">
                    {/* <!-- Button --> */}
                    <button className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4" onClick={handleRangeFilter}>
                      Filter
                    </button>
                  </div>

                  <div className="s-text3 p-t-10 p-b-10">
                    Range: <span id="value-lower">{(priceRange[0] * monetaryModifier).toFixed(2)}</span> -
                    <span id="value-upper">{(priceRange[1] * monetaryModifier).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="filter-color p-t-22 p-b-50 bo3">
                <div className="m-text15 p-b-12">
                  Color
                </div>

                <ul className="flex-w">
                  <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter1" type="checkbox" name="color-filter1" />
                    <label className="color-filter color-filter1" htmlFor="color-filter1"></label>
                  </li>

                  <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter2" type="checkbox" name="color-filter2" />
                    <label className="color-filter color-filter2" htmlFor="color-filter2"></label>
                  </li>

                  <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter3" type="checkbox" name="color-filter3" />
                    <label className="color-filter color-filter3" htmlFor="color-filter3"></label>
                  </li>

                  <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter4" type="checkbox" name="color-filter4" />
                    <label className="color-filter color-filter4" htmlFor="color-filter4"></label>
                  </li>

                  <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter5" type="checkbox" name="color-filter5" />
                    <label className="color-filter color-filter5" htmlFor="color-filter5"></label>
                  </li>

                  <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter6" type="checkbox" name="color-filter6" />
                    <label className="color-filter color-filter6" htmlFor="color-filter6"></label>
                  </li>

                  <li className="m-r-10">
                    <input className="checkbox-color-filter" id="color-filter7" type="checkbox" name="color-filter7" />
                    <label className="color-filter color-filter7" htmlFor="color-filter7"></label>
                  </li>
                </ul>
              </div>

              <div className="search-product pos-relative bo4 of-hidden">
                <input
                  className="s-text7 size6 p-l-23 p-r-50"
                  type="text"
                  name="search-product"
                  placeholder="Search Products..."
                  value={searchTerm}
                  onChange={(ev) => setSearchTerm(ev.target.value)}
                />

                <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4" onClick={handleClickSearchButton}>
                  <i className="fs-12 fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
            {/* <!--  --> */}
            <div className="flex-sb-m flex-w p-b-35">
              <div className="flex-w">
                <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                  <select className="selection-2" name="sorting" onChange={handleOptionSort}>
                    <option value="def">Default Sorting</option>
                    <option value="pop">Popularity</option>
                    <option value="asc">Price: low to high</option>
                    <option value="desc">Price: high to low</option>
                  </select>
                </div>

                <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                  <select className="selection-2" name="sorting" onChange={handlePriceSort}>
                    <option>Price</option>
                    <option value="0-50">$0.00 - $50.00</option>
                    <option value="50-100">$50.00 - $100.00</option>
                    <option value="100-150">$100.00 - $150.00</option>
                    <option value="150-200">$150.00 - $200.00</option>
                    <option value="200+">$200.00+</option>

                  </select>
                </div>
              </div>

              <span className="s-text8 p-t-5 p-b-5">
                {`Showing 1–${!products ? 0 : products.length > 12 ? 12 : products.length} of ${products && products.length} results`}
              </span>
            </div>

            {/* <!-- Products --> */}
            <div className="row">
              {products && products.map((product) => (
                <Product
                  key={product.guid}
                  product={product}
                  monetaryModifier={monetaryModifier}
                />
              ))}
            </div>

            {/* <!-- Pagination --> */}
            <div className="pagination flex-m flex-w p-t-26">
              <a href="#" className="item-pagination flex-c-m trans-0-4 active-pagination">1</a>
              <a href="#" className="item-pagination flex-c-m trans-0-4">2</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Content;
