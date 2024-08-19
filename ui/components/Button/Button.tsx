"use client";

import React from "react";
import Link from "next/link";

export default function Button({ text }: { text: string }) {
  return (
    <div className="add-to-cart">
      <p>
        <Link href="">+ Add to cart</Link>
      </p>
    </div>
  );
}
