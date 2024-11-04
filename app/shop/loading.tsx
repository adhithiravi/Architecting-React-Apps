import LoadingSkeleton from "@/ui/components/Loading/LoadingSkeleton";

export default function Loading() {
  return (
    <section className="main-content">
      <h2>
        Menu Items
        <hr />
      </h2>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <LoadingSkeleton />
      </div>
    </section>
  );
}
