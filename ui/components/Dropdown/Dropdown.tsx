"use client";
import Link from "next/link";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link className="shop-dropdown" href="#">
            Shop <span>&#8964;</span>
          </Link>
          <ul id="hover-menu">
            <li>
              <Link href="/shop/seasonal">Seasonal Pies</Link>
            </li>
            <li>
              <Link href="/shop/fruit">Fruit Pies</Link>
            </li>
            <li>
              <Link href="/shop/cheesecakes">Cheesecakes</Link>
            </li>
            <li>
              <Link href="/shop/all">All Pies</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/register">Register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dropdown;
