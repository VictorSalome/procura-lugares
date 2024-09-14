"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";

export const BussinesItem = () => {
    return (
        <div className="flex gap-3 p-3 border-b-[1px] border-cyan-300 mb-4 items-center">
            <Image
                src="/placeholder.jpg"
                alt="placeholder"
                width={90}
                height={90}
                className="rounded-xl object-cover h[100px] w-[100px]"
            />
            <div>
                <h2 className="text[20px] font-semibold">Bussines Name</h2>
                <h2 className="tex-[15px] text-gray-500">Adress</h2>
                <div className="flex gap-2 items-center">
                    <FaStar color="#E9A900" />
                    <h2>4.5</h2>
                </div>
            </div>
        </div>
    );
};
