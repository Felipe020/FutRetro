export default function CreateProduct(){
    return(
        <div className="w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 border-2 rounded-md flex flex-col gap-6 mt-10">
            <form className="flex flex-col gap-4" autoComplete="off">
                <div className="flex flex-col gap-1">
                    <label className="text-[#F2EBD5]">Título</label>
                    <input 
                    placeholder="Ex: Fluminense 2009" 
                    className="border-2 p-2 rounded-md bg-[#F2EBD5]" 
                    name="create-product"
                    />
                    <label className="text-[#F2EBD5]">Descrição</label>
                    <input 
                    placeholder="Ex: ótimo estado de conservação" 
                    className="border-2 p-2 rounded-md bg-[#F2EBD5]" 
                    name="create-product"
                    />
                    <label className="text-[#F2EBD5]">Preço</label>
                    <input 
                    placeholder="Ex: $299,00" 
                    className="border-2 p-2 rounded-md bg-[#F2EBD5]" 
                    name="create-product"
                    />
                </div>
                <div className="w-full flex justify-end">
                    <button className="w-full lg:w-6/12 xl:w-3/12 bg-[#F2EBD5] hover:bg-[#F2EBD5]/70 text-[#911F27] rounded-md px-6 py-2">
                        Criar
                    </button>
                </div>
            </form>
        </div>
    )
}