"use client";

import React, { useState } from "react";

export default function QuantitySelector() {
  const [itemCount, setItemCount] = useState(1);

  return (
    <div className="quantity-selector">
      <button
        onClick={() => {
          setItemCount(itemCount - 1);
        }}
      >
        -
      </button>
      <span>{itemCount}</span>
      <button
        onClick={() => {
          setItemCount(itemCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
