import LoadingSkeleton from "./LoadingSkeleton";

export default function Loading({ title }: { title: string }) {
  return (
    <section className="main-content">
      <h2>
        {title}
        <hr />
      </h2>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <LoadingSkeleton />
      </div>
    </section>
  );
}
