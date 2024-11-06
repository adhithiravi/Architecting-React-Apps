import { ItemInfo } from "@/ui/components/ItemInfo/ItemInfo";

export const revalidate = 300;

async function fetchSeasonal() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/pies?category=seasonal`,
      { cache: "no-store" }
    );
    const pies = await res.json();
    return pies;
  } catch (error) {
    console.error("Failed to parson JSON:", error);
  }
}

export default async function Seasonal() {
  const pies = await fetchSeasonal();

  return (
    <section className="main-content">
      <h2>
        Seasonal Pies
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
