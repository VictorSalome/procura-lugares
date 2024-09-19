"use client"
import { BusinessList } from "@/components/BusinessList";
import { CategoryList } from "@/components/CategoryList";
import { SearchBar } from "@/components/SearchBar";
import { SideNavBar } from "@/components/SideNavBar";
import GlobalApi from "@/services/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [bussinesList, SetBussinesList] = useState<any[]>([]); // Especifique o tipo correto, se possível

  useEffect(() => {
    getNearByPlace("gas_station");
  }, []);

  const getNearByPlace = (category: string) => {
    GlobalApi.getNearByPlace(category, "35.5827712", "-80.8484864")
      .then(resp => {
        // console.log(resp.data.results)
        SetBussinesList(resp.data.results);
      });
  }

  return (
    <div className="flex">
      <SideNavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10">
        <div>
          <SearchBar />
          <CategoryList setSelectedCategory={(category: string) => getNearByPlace(category)} />
          <BusinessList bussinesListData={bussinesList} />
        </div>
        {/* google map */}
        <div>Google map</div>
      </div>
    </div>
  );
}
