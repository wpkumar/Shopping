import React from 'react';

const ProductDetailDesc = ({product}) => {
  if(!product){
    return <div></div>
  }
  const imageSize = {
    height: "400px",
    width: "500px"
  };
  const centerAlign = {
    marginLeft: "53.0%"
  };
  return (
    <div style={ centerAlign }>
      <div className="col-md-4" style={imageSize}>
        <div>
          <h4>
            <span className="label label-default">
              {product.title}
            </span>
          </h4>
        </div>
        <div>
          <p>
            {product.description}
          </p>
        </div>
        <div>
          <form>
            <button>{ 'Add to Cart'} </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailDesc;
