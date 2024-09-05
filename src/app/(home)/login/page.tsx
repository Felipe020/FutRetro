import UserLogin from "@/components/user-login";

export default function Page(){
    return(
        <div className="w-full min-h-screen bg-[url('/bg/maraca.png')] bg-cover p-10 md:p-0 flex items-center justify-center">
            <UserLogin />
        </div>
    )
}