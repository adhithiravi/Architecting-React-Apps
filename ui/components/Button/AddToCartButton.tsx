"use client";

import React from "react";
import { addToCart } from "@/app/lib/api";

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
  const handleAddToCart = async () => {
    try {
      await addToCart(id, name, price, 1, imageUrl);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  return (
    <div className="add-to-cart">
      <p>
        <button onClick={handleAddToCart}>+ ADD TO CART</button>
      </p>
    </div>
  );
}
