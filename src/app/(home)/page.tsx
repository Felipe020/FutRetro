import LandingPage from "@/components/landingPage";
import CollectionSection from "@/components/collectionSection";
import KnowFutRetro from "@/components/knowFutRetro";
import { AboutUs } from "@/components/aboutUs";
import Contact from "@/components/contact";
import getBestProducts from "../../../actions/home/actions";

export default async function Home() {
  const products = await getBestProducts();

  return (
    <div className="w-full h-full bg-red-900">
      <LandingPage />
      <CollectionSection products={products} />
      <KnowFutRetro />
      <AboutUs />
      <Contact />
    </div>
  );
}
