


import Image from "next/image"
import { IListDate } from "./CategoryList"


export const CategoryItem = ({ category }: { category: IListDate }) => {
    return (
        <div className="flex flex-col items-center cursor-pointer p-3 bg-cyan-100 rounded-2xl hover:scale-105 transition-all duration-100">
            <Image src={category.icon} alt={category.name} width={35} height={35} />

            <h2 className="text-[12px] text-cyan-900 p-3 rounded-2xl ">
                {category.name}
            </h2>
        </div>
    )
}

export default CategoryItem

