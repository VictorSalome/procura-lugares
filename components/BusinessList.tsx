"use client"

import { useEffect, useState } from "react"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6"
import { BussinesItem } from "./BussinesItem"
import { IDataMaps } from "./interfaces"
import { ShimmerEffectItem } from "./ShimmerEffectItem"

export interface BusinessListProps {
    bussinesListData: IDataMaps[];
}

export const BusinessList = ({ bussinesListData }: BusinessListProps) => {
    const [loader, setLoader] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Simula um carregamento e define o loader como falso após 1 segundo
        const timer = setTimeout(() => {
            setLoader(false);
        }, 1000);

        // Limpa o timer quando o componente é desmontado
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Reseta o carregamento e o contador quando os dados mudam
        setLoader(true);
        setCount(0);
    }, [bussinesListData]);

    return (
        <div>
            <h2 className="text-[20px] mt-3 font-bold mb-3 flex items-center justify-between">
                Principais lugares próximos

                <span className="flex">
                    {count > 0 && (
                        <FaAngleLeft
                            className="w-10 h-10 p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-100 cursor-pointer rounded-lg"
                            onClick={() => setCount(count - 3)}
                        />
                    )}
                    <FaAngleRight
                        className="w-10 h-10 p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-100 cursor-pointer rounded-lg"
                        onClick={() => setCount(count + 3)}
                    />
                </span>
            </h2>

            {loader ? (
                <div>
                    {[1, 2, 3].map((item, index) => (
                        <ShimmerEffectItem key={index} />
                    ))}
                </div>
            ) : (
                <div>
                    {bussinesListData.slice(count, count + 3).map((business, index) => (
                        <div key={index}>
                            <BussinesItem business={business} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

