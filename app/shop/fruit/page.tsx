import { ItemInfo } from "@/ui/components/ItemInfo/ItemInfo";

async function fetchFruitPies() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/pies?category=fruit`
    );
    const pies = await res.json();
    return pies;
  } catch (error) {
    console.error("Failed to parson JSON:", error);
  }
}

export default async function Fruit() {
  const pies = await fetchFruitPies();

  return (
    <section className="main-content">
      <h2>
        Fruit Pies
        <hr />
      </h2>

      <div className="gallery-wrapper">
        {pies.map((pie: any) => (
          <ItemInfo key={pie.id} item={pie} />
        ))}
      </div>
    </section>
  );
}
