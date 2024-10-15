import { Suspense } from "react";
import CheesecakesComponent from "./cheesecakes";
import Loading from "@/ui/components/Loading/Loading";

export default async function Cheesecakes() {
  return (
    <Suspense fallback={<Loading title="Cheesecakes" />}>
      <CheesecakesComponent />;
    </Suspense>
  );
}
