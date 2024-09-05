export default function UserLogin(){
    return(
        <div className="flex flex-col bg-[#911F27] w-full px-2 py-4 lg:w-4/12 gap-2 rounded-xl lg:py-12 lg:px-6">
            
            <h1 className="font-bold text-3xl text-[#F2EBD5] text-center tracking-widest">LOGIN</h1>
            <label className="text-start text-[#F2EBD5] font-semibold text-xl">Email:</label>
            <input 
            type="email" 
            name="email"
            required
            className="lg:w-[85%] border-2 p-2 rounded-md bg-[#F2EBD5]"
            />

            <label className="text-start text-[#F2EBD5] font-semibold text-xl">Senha:</label>
            <input 
            type="password" 
            name="senha"
            required
            className="lg:w-[85%] border-2 p-2 rounded-md bg-[#F2EBD5]"
            />

            <div className="flex items-center justify-center">
            <button className="bg-[#F2EBD5] hover:bg-[#F2EBD5]/70 text-[#911F27] font-bold text-2xl rounded-xl py-1 mt-6 w-8/12 ">
                Entrar
            </button>
            </div>
            
        </div>
    )
}