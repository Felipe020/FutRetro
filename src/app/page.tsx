import Image from "next/image";
import LandingPage from "@/components/landingPage";
import CollectionSection from "@/components/collectionSection";

export default function Home() {
  return (
    <div className="w-full h-full">
      <LandingPage/>
      <CollectionSection/>
    </div>
  );
}
