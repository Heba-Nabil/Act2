import { useContext } from "react";
import { ResourcesContext } from "@/contexts/DataContext";

const BottomBar = () => {
  const { useTranslate } = useContext(ResourcesContext);
  return (
    <div className="relative z-10 bg-[#1E352C] text-white py-2 text-center border-t-[1px] border-t-white">
      <div className="container mx-auto">
        <p className="text-sm">  {useTranslate("copyrights")} <a href="https://psdigital.me/" target="_blank">PSdigital</a></p>
      </div>
    </div>
  );
};
export default BottomBar;
