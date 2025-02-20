import {cn} from "@/lib/utils"
const Card = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        // <div className={cn("glass-bg shadow-md p-6 m-1 h-full", className)} >
        <div className={cn("bg-white rounded-lg shadow-md p-6 m-1 h-full", className)} >
            {children}
        </div>
    )
}

export default Card;
