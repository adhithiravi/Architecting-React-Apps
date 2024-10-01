"use client";

import React from "react";

interface AddToCartButtonProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export default function AddToCartButton({
  id,
  name,
  price,
  imageUrl,
}: AddToCartButtonProps) {
  const handleAddToCart = () => {
    // code to add to cart
  };

  return (
    <div className="add-to-cart">
      <p>
        <button onClick={handleAddToCart}>+ ADD TO CART</button>
      </p>
    </div>
  );
}
