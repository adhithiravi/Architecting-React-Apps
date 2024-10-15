"use client";

import useSWR from "swr";
import { CartItem } from "@/types/types";
import { ShoppingCartItem } from "@/ui/components/ShoppingCart/ShoppingCartItem";

// Define the fetcher function for SWR
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Cart() {
  const { data: cartItems, error } = useSWR<CartItem[]>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`,
    fetcher,
    { revalidateOnFocus: true } // automatically re-fetch wwhen the window is focussed
  );

  if (error) return <div>Failed to load cart items</div>;
  if (!cartItems) return <div>Loading cart items ...</div>;

  return (
    <section className="main-content">
      <h2>
        Shopping Cart
        <hr />
      </h2>
      <div className="cart-wrapper">
        <div className="cart-items-wrapper">
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item: CartItem) => <ShoppingCartItem item={item} />)
          )}
        </div>
      </div>
    </section>
  );
}
