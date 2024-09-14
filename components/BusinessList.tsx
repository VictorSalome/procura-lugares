"use client"

import { useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"


export const BusinessList = () => {

    const [count, setCount] = useState(0)



    return (
        <div>
            <h2 className="text-[20px] mt-3 font-bold mb-3 flex items-center justify-between">
                Principais lugares proximos


                <span className="flex">
                    {count > 0 ? < FaAngleLeft className="w-10 h-10 p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-100 cursor-pointer rounded-lg"
                        onClick={() => setCount(count - 1)} /> : null}
                    <FaAngleRight className="w-10 h-10 p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-100 cursor-pointer rounded-lg"
                        onClick={() => setCount(count + 1)}
                    />
                </span>

            </h2>


        </div>
    )
}

