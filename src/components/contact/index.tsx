export default function Contact(){
    return(
        <div className="w-full lg:w-10/12 lg:m-auto flex flex-wrap justify-center shadow-2xl py-8 px-4 gap-6">
            <div className="flex flex-col flex-grow justify-center p-4 gap-16 w-4/12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-[#F2EBD5] text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">
                        Alguma dúvida sobre nossos produtos?
                    </h1>
                    <span className="text-[#F2EBD5] text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl leading-relaxed tracking-widest">
                        Entre em contato
                    </span>
                </div>
                <form className="flex flex-col gap-4 ">
                    <input type="text" placeholder="Nome" className="p-3 required bg-[#F2EBD5]"/>
                    <input type="text" placeholder="Email" className="p-3 required bg-[#F2EBD5]"/>
                    <input type="text" placeholder="Assunto" className="p-3 required bg-[#F2EBD5]"/>
                    <textarea placeholder="Mensagem" rows={5} className="p-3 resize-none bg-[#F2EBD5]"/>
                    <div className="h-[1px] bg-[#F2EBD5] my-2" />
                    <button className="w-10/12 lg:w-8/12 m-auto bg-[#F2EBD5] text-[#911F27] mt-0 hover:bg-[#F2EBD5]/90 py-4 px-5 rounded-md text-lg 2xl:text-2xl font-semibold transition-all">Entrar em contato</button>
                </form>
            </div>
        </div>
    )
}