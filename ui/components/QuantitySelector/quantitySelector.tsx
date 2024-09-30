"use client";

import { updateCartItem } from "@/app/lib/api";
import React, { useState } from "react";
import Link from "next/link";

interface QuanitySelectorProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  };
}

export default function QuantitySelector({ item }: QuanitySelectorProps) {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
    try {
      await updateCartItem(item.id, newQuantity);
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  return (
    <div className="quantity-selector-wrapper">
      <div className="quantity-selector">
        <button
          onClick={() => {
            handleQuantityChange(quantity - 1);
          }}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => {
            handleQuantityChange(quantity + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="cart-item-price-wrapper">
        <p className="cart-item-price">
          Total: ${(item.price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
