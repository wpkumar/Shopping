import React from 'react';

const ProductDetailImage = ({product, onProductSelect}) => {
  if(!product){
    return <div></div>
  }
  const imageSize = {
    height: "80px",
    width: "100px"
  };
  return (
    <div className="wrapper">
      <div className="div_to_hold_images"><a onClick={console.log("test")}><img className="media-object" style={imageSize} src={product.image} /></a></div>
      <div className="div_to_hold_images"><img className="media-object" style={imageSize} src={product.image}/></div>
      <div className="div_to_hold_images"><img className="media-object" style={imageSize} src={product.image}/></div>
      <div className="div_to_hold_images"><img className="media-object" style={imageSize} src={product.image}/></div>
      <div className="div_to_hold_images"><img className="media-object" style={imageSize} src={product.image}/></div>
      <div className="div_to_hold_images"><img className="media-object" style={imageSize} src={product.image}/></div>
      <div className="div_to_hold_images"><img className="media-object" style={imageSize} src={product.image}/></div>
      <div className="div_to_hold_images"><img className="media-object" style={imageSize} src={product.image}/></div>
    </div>
  );
};

export default ProductDetailImage;
