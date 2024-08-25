import Image from "next/image";
import LandingPage from "@/components/landingPage";
import CollectionSection from "@/components/collectionSection";
import KnowFutRetro from "@/components/knowFutRetro";
import { AboutUs } from "@/components/aboutUs";

export default function Home() {
  return ( 
    <div className="w-full h-full bg-red-900">
      <LandingPage/>
      <CollectionSection/>
      <KnowFutRetro/>
      <AboutUs />
    </div>
  );
}
