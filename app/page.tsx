import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import LoadingContainer from "@/components/global/LoadingContainer";
import { Suspense } from "react";

function HomePage() {
  return (
    <div className="p-8 bg-sky-50">
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </div>
  );
}
export default HomePage;
