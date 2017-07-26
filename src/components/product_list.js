import React from 'react';
import ProductListItem from './prod_list_item';

const ProductList = (props) => {
  const productItems = props.products.map((product) => {
    return (
      <ProductListItem
      onProductSelect = {props.onProductSelect}
      key={product.id}
       product={product} />
    );
  });

  return(
    <ul className="col-md-3 list-group">
      {productItems}
    </ul>
  );
};

export default ProductList;
