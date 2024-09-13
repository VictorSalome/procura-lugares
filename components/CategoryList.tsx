"use client"

import { CategoryListDate } from "@/Sherad/Data"
import { useEffect, useState } from "react"


interface IListDate {
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
            <div>
                {CategoryListDate.map((categorys) => (
                    <div key={categorys.id}>
                        {categorys.name}
                    </div>
                ))}
            </div>

        </div>
    )
}

