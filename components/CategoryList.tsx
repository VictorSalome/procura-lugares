"use client"

import { CategoryListDate } from "@/Sherad/Data"
import { useEffect, useState } from "react"
import { CategoryItem } from "./CategoryItem"


export interface IListDate {
    id: number,
    name: string,
    value: string,
    icon: string,




}
export const CategoryList = () => {
    const [category, setCategory] = useState<IListDate[]>()


    useEffect(() => {
        setCategory(CategoryListDate)

    }, [category])


    return (
        <div>
            <h2 className="text-[20px] mt-3 font-bold mb-3">
                Selecione sua categoria favorita
            </h2>
            <div className="flex gap-6 mb-5">
                {CategoryListDate.map((item) => (

                    <div key={item.id} >
                        <CategoryItem category={item} />
                    </div>
                ))}
            </div>

        </div>
    )
}

