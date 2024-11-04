import { CartItem } from "@/types/types";
import AddToCartButton from "../Button/AddToCartButton";
import Image from "next/image";

// Display Menu Item info
export async function ItemInfo({ item }: { item: CartItem }) {
  return (
    <div className="pie-item">
      <Image src={item.imageUrl} alt={item.name} width={400} height={200} />
      <AddToCartButton
        id={item.id}
        name={item.name}
        price={item.price}
        imageUrl={item.imageUrl}
      />
      <div className="pie-info">
        <h4>{item.name}</h4>
        <p>${item.price}</p>
      </div>
    </div>
  );
}
