import { ItemInfo } from "@/ui/components/ItemInfo/ItemInfo";

// Dynamic data fetching, no cache
async function fetchCheesecakes() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/pies?category=cheesecakes`,
      { cache: "no-store" }
    );
    const pies = await res.json();
    return pies;
  } catch (error) {
    console.error("Failed to parson JSON:", error);
  }
}

export default async function CheesecakesComponent() {
  const pies = await fetchCheesecakes();

  return (
    <section className="main-content">
      <h2>
        Cheesecakes
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
