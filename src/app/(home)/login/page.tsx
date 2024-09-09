import UserLogin from "@/components/user-login";
import { Suspense } from "react";

export default function Page(){
    return(
        <div className="w-full min-h-screen bg-[url('/bg/maraca.png')] bg-cover p-10 md:p-0 flex items-center justify-center">
            <Suspense>
                <UserLogin />
            </Suspense>
        </div>
    )
}