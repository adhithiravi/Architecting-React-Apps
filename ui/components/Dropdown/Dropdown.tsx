"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef, MouseEvent } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <ul>
        <li ref={dropdownRef}>
          <Link className="shop-dropdown" href="#" onClick={toggleDropdown}>
            Shop <span>&#8964;</span>
          </Link>
          {isOpen && (
            <ul id="hover-menu">
              <li>
                <Link href="/shop/seasonal" onClick={closeDropdown}>
                  Seasonal Pies
                </Link>
              </li>
              <li>
                <Link href="/shop/fruit" onClick={closeDropdown}>
                  Fruit Pies
                </Link>
              </li>
              <li>
                <Link href="/shop/cheesecakes" onClick={closeDropdown}>
                  Cheesecakes
                </Link>
              </li>
              <li>
                <Link href="/shop/all" onClick={closeDropdown}>
                  All Pies
                </Link>
              </li>
            </ul>
          )}
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
