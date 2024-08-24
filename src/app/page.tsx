import Image from "next/image";
import LandingPage from "@/components/landingPage";
import CollectionSection from "@/components/collectionSection";
import KnowFutRetro from "@/components/knowFutRetro";

export default function Home() {
  return (
    <div className="w-full h-full">
      <LandingPage/>
      <CollectionSection/>
      <KnowFutRetro/>
    </div>
  );
}
