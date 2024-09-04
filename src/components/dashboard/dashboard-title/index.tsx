type DashboardTitleProps = {
    title: string;
    description: string;
}

export default function DashboardTitle({title, description}: DashboardTitleProps){
    return(
        <div>
            <h1 className="text-4xl font-bold mb-2 text-[#F2EBD5]">{title}</h1>
            <span className="text-[#F2EBD5]/95">{description}</span>
        </div>
    )
}