import { CategoryListDate } from "@/Sherad/Data"
import { useEffect, useState } from "react"
import { CategoryItem } from "./CategoryItem"

export interface IListDate {
    id: number,
    name: string,
    value: string,
    icon: string,
}

export interface ICategoryProps {
    id: number;
    name: string;
    value: string;
    icon: string;
}

export interface CategoryListProps {
    setSelectedCategory: (categoryValue: string) => void;
}

export const CategoryList = ({ setSelectedCategory }: CategoryListProps) => {
    console.log('setSelectedCategory', setSelectedCategory)
    const [category, setCategory] = useState<IListDate[] | undefined>()

    useEffect(() => {
        setCategory(CategoryListDate)
    }, [category])

    return (
        <div>
            <h2 className="text-[20px] mt-3 font-bold mb-3">
                Selecione sua categoria favorita
            </h2>
            <div className="flex gap-6 mb-5 ">
                {CategoryListDate.map((item) => (
                    <div key={item.id} onClick={() => setSelectedCategory(item.value)}>
                        <CategoryItem category={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}
