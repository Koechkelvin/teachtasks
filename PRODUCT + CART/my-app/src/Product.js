import React, { useState } from 'react';

const Product = ({ product, addToCart }) => {
  const [selectedColor, setSelectedColor] = useState(product.availableColors[0]);
  const [image, setImage] = useState(`/images/${product.title.replace(/\s+/g, '_')}_${selectedColor}.jpg`);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setImage(`/images/${product.title.replace(/\s+/g, '_')}_${color}.jpg`);
  };

  return (
    <div className="product" style={{ backgroundColor: selectedColor.toLowerCase() }}>
      <h2>{product.title}</h2>
      <img src={process.env.PUBLIC_URL + image} alt={`${product.title} - ${selectedColor}`} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <div className="color-options">
        {product.availableColors.map((color) => (
          <button
            key={color}
            className={`color-button ${color.toLowerCase()}`}
            onClick={() => handleColorChange(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        Add item to Cart
      </button>
    </div>
  );
};

export default Product;
