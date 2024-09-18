"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { IDataMaps } from "./interfaces";

interface BussinesitemProps {

    business: IDataMaps
}

export const BussinesItem = ({ business }: BussinesitemProps) => {
    console.log('business', business)

    const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
    const photo_ref = business?.photos ? business?.photos[0]?.photo_reference : ''
    return (
        <div className="flex gap-3 p-3 border-b-[1px] border-cyan-300 mb-4 items-center">
            <Image src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=${GOOGLE_API_KEY}`}
                alt="business-image"
                width={90}
                height={90}
                className="rounded-xl object-cover h[100px] w-[100px]"
            />
            <div>
                <h2 className="text[20px] font-semibold">{business.name}</h2>
                <h2 className="tex-[15px] text-gray-500">{business.vicinity}</h2>
                <div className="flex gap-2 items-center">
                    <FaStar color="#E9A900" />
                    <h2>{business.rating}</h2>
                </div>
            </div>
        </div>
    );
};
