import { ItemInfo } from "@/ui/components/ItemInfo/ItemInfo";

export default async function Fruit() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pies?category=fruit`
  );
  const pies = await res.json();

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
