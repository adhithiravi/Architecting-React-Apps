import { ItemInfo } from "@/ui/components/ItemInfo/ItemInfo";

export const dynamic = "force-dynamic";

async function fetchAllPies() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/pies?category=all`
    );
    const pies = await res.json();
    return pies;
  } catch (error) {
    console.error("Failed to parson JSON:", error);
  }
}

export default async function All() {
  const pies = await fetchAllPies();

  return (
    <section className="main-content">
      <h2>
        All Pies
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
