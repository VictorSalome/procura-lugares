"use client"

import { GoSearch } from "react-icons/go"

export const SearchBar = () => {
    return (
        <div className="flex gap-3 bg-cyan-100 p-3 rounded-xl">
            <GoSearch className="w-6 h-6 text-cyan-400" />
            <input
                type="text"
                placeholder="Pesquise"
                className="bg-transparent outline-none w-full text-[17px] placeholder-cyan-400"
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.key === "Enter") {
                        const inputValue = (e.target as HTMLInputElement).value;
                        console.log(inputValue);
                    }
                }}
            />
        </div>
    )
}