"use client";

import { CartItem } from "@/types/types";
import React, { useState } from "react";

export default function QuantitySelector({ price, quantity }: CartItem) {
  const [currentQuantity, setQuantity] = useState(quantity);

  const handleQuantityChange = async (newQuantity: number) => {
    if (currentQuantity < 1) return;
    setQuantity(newQuantity);
  };

  return (
    <div className="quantity-selector-wrapper">
      <div className="quantity-selector">
        <button
          onClick={() => {
            handleQuantityChange(currentQuantity - 1);
          }}
        >
          -
        </button>
        <span>{currentQuantity}</span>
        <button
          onClick={() => {
            handleQuantityChange(currentQuantity + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="cart-item-price-wrapper">
        <p className="cart-item-price">
          Total: ${(price * currentQuantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
