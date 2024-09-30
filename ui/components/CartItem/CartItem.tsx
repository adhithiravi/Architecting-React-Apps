"use client";

import QuantitySelector from "../QuantitySelector/QuantitySelector";
import Image from "next/image";

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
  };
}

export default function CartItem({ item }: CartItemProps) {
  return (
    <>
      <div className="cart-item-image-wrapper">
        <Image
          src={item.imageUrl}
          alt="image of Classic Apple Pie"
          width={600}
          height={200}
        />
      </div>

      <div className="cart-item-details-wrapper">
        <h3 className="cart-item-name">{item.name}</h3>
        <QuantitySelector item={item} />
      </div>
    </>
  );
}
