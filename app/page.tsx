import { SearchBar } from "@/components/SearchBar";
import { SideNavBar } from "@/components/SideNavBar";

export default function Home() {
  return (
    <div className="flex">
      <SideNavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full mt-10">
        {/* Business List */}

        <div className=""><SearchBar /></div>

        {/* google map */}
        <div>Google map</div>
      </div>
    </div>
  );
}
