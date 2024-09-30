import { NextResponse } from "next/server";

// Define the valid category keys
type Category = "fruit" | "seasonal" | "cheesecakes" | "all";

// Mock data for pies with image URLs
const piesData: Record<
  Category,
  { id: number; name: string; price: number; imageUrl: string }[]
> = {
  fruit: [
    {
      id: 1,
      name: "Apple Pie",
      price: 10,
      imageUrl: "/images/Fruit/fruit1.png",
    },
    {
      id: 2,
      name: "Cherry Pie",
      price: 14.25,
      imageUrl: "/images/Fruit/fruit2.png",
    },
    {
      id: 3,
      name: "Mixed Berry Pie",
      price: 15,
      imageUrl: "/images/Fruit/fruit3.png",
    },
  ],
  seasonal: [
    {
      id: 4,
      name: "Pumpkin Pie",
      price: 15,
      imageUrl: "/images/Seasonal/pie-1.png",
    },
    {
      id: 5,
      name: "Apple Pecan Pie",
      price: 18,
      imageUrl: "/images/Seasonal/pie-2.png",
    },
    {
      id: 6,
      name: "Pecan Pie",
      price: 18,
      imageUrl: "/images/Seasonal/pie-3.png",
    },
  ],
  cheesecakes: [
    {
      id: 7,
      name: "New York Cheesecake",
      price: 20,
      imageUrl: "/images/Cheesecakes/cheesecake1.jpg",
    },
    {
      id: 8,
      name: "Chocolate Cheesecake",
      price: 25,
      imageUrl: "/images/Cheesecakes/cheesecake2.jpg",
    },
    {
      id: 9,
      name: "Vanilla Cheesecake",
      price: 22,
      imageUrl: "/images/Cheesecakes/cheesecake3.jpg",
    },
    {
      id: 10,
      name: "Pista Cheesecake",
      price: 18,
      imageUrl: "/images/Cheesecakes/cheesecake4.jpg",
    },
    {
      id: 11,
      name: "Strawberry Cheesecake",
      price: 20,
      imageUrl: "/images/Cheesecakes/cheesecake5.jpg",
    },
    {
      id: 12,
      name: "Blueberry Cheesecake",
      price: 22,
      imageUrl: "/images/Cheesecakes/cheesecake6.jpg",
    },
  ],
  all: [
    {
      id: 1,
      name: "Apple Pie",
      price: 10,
      imageUrl: "/images/Fruit/fruit1.png",
    },
    {
      id: 2,
      name: "Cherry Pie",
      price: 14.25,
      imageUrl: "/images/Fruit/fruit2.png",
    },
    {
      id: 3,
      name: "Mixed Berry Pie",
      price: 15,
      imageUrl: "/images/Fruit/fruit3.png",
    },
    {
      id: 4,
      name: "Pumpkin Pie",
      price: 15,
      imageUrl: "/images/Seasonal/pie-1.png",
    },
    {
      id: 5,
      name: "Apple Pecan Pie",
      price: 18,
      imageUrl: "/images/Seasonal/pie-2.png",
    },
    {
      id: 6,
      name: "Pecan Pie",
      price: 18,
      imageUrl: "/images/Seasonal/pie-3.png",
    },
    {
      id: 7,
      name: "New York Cheesecake",
      price: 20,
      imageUrl: "/images/Cheesecakes/cheesecake1.jpg",
    },
    {
      id: 8,
      name: "Chocolate Cheesecake",
      price: 25,
      imageUrl: "/images/Cheesecakes/cheesecake2.jpg",
    },
    {
      id: 9,
      name: "Vanilla Cheesecake",
      price: 22,
      imageUrl: "/images/Cheesecakes/cheesecake3.jpg",
    },
    {
      id: 10,
      name: "Pista Cheesecake",
      price: 18,
      imageUrl: "/images/Cheesecakes/cheesecake4.jpg",
    },
    {
      id: 11,
      name: "Strawberry Cheesecake",
      price: 22,
      imageUrl: "/images/Cheesecakes/cheesecake5.jpg",
    },
    {
      id: 12,
      name: "Blueberry Cheesecake",
      price: 22,
      imageUrl: "/images/Cheesecakes/cheesecake6.jpg",
    },
  ],
};

// GET: Fetch pies based on category
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") as Category;

  if (!category || !piesData[category]) {
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });
  }

  return NextResponse.json(piesData[category]);
}
