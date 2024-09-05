export default function UserLogin() {
    return (
      <div className="flex flex-col bg-[#911F27] w-full px-4 py-6 lg:w-4/12 lg:px-6 lg:py-12 gap-6 rounded-xl items-center">
        <h1 className="font-bold text-3xl text-[#F2EBD5] text-center tracking-widest mb-6">
          LOGIN
        </h1>
  
        <div className="flex flex-col w-full lg:w-[85%] gap-4">
          <div className="flex flex-col w-full">
            <label className="text-[#F2EBD5] font-semibold text-xl mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              required
              className="border-2 border-[#F2EBD5] p-2 rounded-md bg-[#F2EBD5] w-full"
            />
          </div>
  
          <div className="flex flex-col w-full">
            <label className="text-[#F2EBD5] font-semibold text-xl mb-1">
              Senha:
            </label>
            <input
              type="password"
              name="senha"
              required
              className="border-2 border-[#F2EBD5] p-2 rounded-md bg-[#F2EBD5] w-full"
            />
          </div>
        </div>
  
        <div className="flex items-center justify-center mt-6 w-full lg:w-8/12">
          <button className="bg-[#F2EBD5] hover:bg-[#F2EBD5]/70 text-[#911F27] font-bold text-2xl rounded-xl py-2 px-6 w-full">
            Entrar
          </button>
        </div>
      </div>
    );
  }
  