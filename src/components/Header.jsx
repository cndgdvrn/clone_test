import {
  GetirBuyuk,
  GetirCarsi,
  GetirLogo,
  GetirSu,
  GetirYemek,
} from "../ui/Logos";
import { RiGlobalLine } from "react-icons/ri";
import { BiSolidUser } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-getir-purple text-white sticky top-0 z-50 w-full">
      <div className=" mx-[132px] h-[45px] flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-getir-logo-bg mt-[5px] py-3 px-5 rounded-tl-md rounded-tr-md mr-[1px]">
            <GetirLogo />
          </div>
          <div className="mt-[5px] py-3 px-5 rounded-tl-md rounded-tr-md mr-[1px] hover:bg-getir-logo-bg hover:rounded-tl-md  hover:rounded-tr-md">
            <GetirYemek />
          </div>
          <div className="mt-[5px] py-3 px-5 rounded-tl-md rounded-tr-md mr-[1px] hover:bg-getir-logo-bg hover:rounded-tl-md  hover:rounded-tr-md">
            <GetirBuyuk />
          </div>
          <div className="mt-[5px] py-3 px-5 rounded-tl-md rounded-tr-md mr-[1px] hover:bg-getir-logo-bg hover:rounded-tl-md  hover:rounded-tr-md">
            <GetirSu />
          </div>
          <div className="mt-[5px] py-3 px-5 rounded-tl-md rounded-tr-md mr-[1px] hover:bg-getir-logo-bg hover:rounded-tl-md  hover:rounded-tr-md">
            <GetirCarsi />
          </div>
        </div>

        {/* RIGT SIDE */}
        <div className="flex items-center gap-x-5 text-white text-opacity-90 font-medium">
          <div className="flex items-center gap-x-2">
            <RiGlobalLine size={16} />
            <span className="text-xs">Türkçe (TR) </span>
          </div>
          <div className="flex items-center gap-x-2">
            <BiSolidUser size={16} />
            <span className="text-xs">Giriş yap</span>
          </div>
          <div className="flex items-center gap-x-2">
            <FaUserCheck size={16} />
            <span className="text-xs">Kayıt ol</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
