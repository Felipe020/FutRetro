const Product = 'Produto default'
const Desc = 'Descrição default'
const Val = 'Valor default'

export default function EditProduct(){
    return(
        <div className="w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 border-2 rounded-md flex flex-col gap-6 mt-10">
            <form className="flex flex-col gap-4" autoComplete="off">
                <div className="flex flex-col gap-1">
                    <label className="text-[#F2EBD5]">Título</label>
                    <input 
                    className="border-2 p-2 rounded-md bg-[#F2EBD5]" 
                    name="create-product"
                    defaultValue={Product}
                    />

                    <label className="text-[#F2EBD5]">Descrição</label>
                    <input 
                    className="border-2 p-2 rounded-md bg-[#F2EBD5]" 
                    name="create-product"
                    defaultValue={Desc}
                    />

                    <label className="text-[#F2EBD5]">Preço</label>
                    <input 
                    className="border-2 p-2 rounded-md bg-[#F2EBD5]" 
                    name="create-product"
                    defaultValue={Val}
                    />

                    <label className="text-[#F2EBD5]">Imagem</label>
                    <input 
                    type="file"
                    name="imagem" 
                    accept="image/*"
                    className="border-2 p-2 rounded-md bg-[#F2EBD5]" 
                    />
                </div>
                <div className="w-full flex justify-end">
                    <button className="w-full lg:w-6/12 xl:w-3/12 bg-[#F2EBD5] hover:bg-[#F2EBD5]/70 text-[#911F27] rounded-md px-6 py-2">
                        Salvar
                    </button>
                </div>
            </form>
        </div>
    )
}