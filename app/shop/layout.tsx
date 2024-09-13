import "../../ui/globals.css";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="main-content">{children}</section>;
}
