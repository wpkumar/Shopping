import React from 'react';

const ProductDetail = ({product}) => {
  if(!product){
    return <div>Loading...</div>
  }
  const imageUrl = product.image;
  const imageSize = {
    height: "400px",
    width: "300px"
  };
  //const url = 'https:/www.youtube.com/embed/' + videoID;
  return (
    <div className="video-detail col-md-8" style={imageSize}>
      <div>
          <img className="media-object" style={imageSize} src={imageUrl}/>
      </div>
    </div>
  );
};

export default ProductDetail;
