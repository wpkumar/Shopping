import React from 'react';

const ProductListItem = ({product, onProductSelect}) => {
  const imageUrl = product.image;
  const imageSize = {
    height:"100px"
  };
  return(
    <li onClick = {() => onProductSelect(product)} className="list-group-item">
      <div className="video_list media">
        <div className="media-left">
          <img className="media-object" style={imageSize} src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{product.title}</div>
        </div>
      </div>
    </li>
  );
}

export default ProductListItem;
