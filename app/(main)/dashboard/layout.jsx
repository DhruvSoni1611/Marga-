import { BarLoader } from "react-spinners";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto py-6">
      <Suspense
        fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
      >
        {children}
      </Suspense>
    </div>
  );
}
