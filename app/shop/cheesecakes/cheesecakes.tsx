import { ItemInfo } from "@/ui/components/ItemInfo/ItemInfo";

async function fetchCheesecakes() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/pies?category=cheesecakes`,
    { cache: "no-store" }
  );
  const pies = await res.json();
  return pies;
}

// Dynamic data fetching, no cache
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
