import Header from "@/components/header";
import Footer from "@/components/footer";
import { Suspense } from "react";

export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return(
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Header />
            {children}
            <Footer />
            </Suspense>
        </div>
    )
}