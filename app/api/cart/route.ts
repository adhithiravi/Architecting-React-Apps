import { NextResponse } from "next/server";

interface cartProps {
  id: string;
  quantity: number;
  name: string;
  price: number;
  imageUrl: string;
}

// Mock cart data stored in memory
let cart: cartProps[] = [];

// GET: Fetch current cart items
export async function GET() {
  return NextResponse.json(cart);
}

// POST: Add a new item to the cart
export async function POST(request: Request) {
  const { id, quantity, name, price, imageUrl } = await request.json();

  // Check if item already exists in the cart
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    // Update quantity if item already exists
    existingItem.quantity += quantity;
  } else {
    // Add new item to the cart
    cart.push({ id, name, price, quantity, imageUrl });
  }

  return NextResponse.json(cart);
}

// PUT: Update an item in the cart
export async function PUT(request: Request) {
  const { id, quantity } = await request.json();

  // Find the item in the cart and update its quantity
  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity = quantity;
  }

  return NextResponse.json(cart);
}
