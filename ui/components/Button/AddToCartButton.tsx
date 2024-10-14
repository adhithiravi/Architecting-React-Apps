"use client";

import React, { useState } from "react";

type AddToCartButtonProps = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};

export default function AddToCartButton({
  id,
  name,
  price,
  imageUrl,
}: AddToCartButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {};

  return (
    <div className="add-to-cart">
      <p>
        <button onClick={handleAddToCart} disabled={loading}>
          {loading ? "Adding..." : "+ ADD TO CART"}
        </button>
      </p>
    </div>
  );
}
