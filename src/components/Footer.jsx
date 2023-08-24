import { Bs } from "react-flags-select";
import {
  AppStoreLogo,
  GetirWebImage,
  GooglePlayLogo,
  HuaweiLogo,
} from "../ui/Logos";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-white">
      <div className="mx-[132px] pt-12 pb-6 space-y-4 ">
        <div className="flex justify-between text-[13px]">
          <div className="flex flex-col gap-y-3">
            <span className="text-getir-logo-bg text-[18px] opacity-80">
              Getir&apos;i indirin
            </span>
            <AppStoreLogo />
            <GooglePlayLogo />
            <HuaweiLogo />
          </div>
          <div className="flex flex-col gap-y-3 opacity-80">
            <span className="text-getir-logo-bg text-[18px]">
              Getir&apos;i keşfedin
            </span>
            <span>Hakkımızda</span>
            <span>Kariyer</span>
            <span>Teknoloji Kariyerleri</span>
            <span>İletişim</span>
            <span>Sosyal Sorumluluk Projeleri</span>
          </div>
          <div className="flex flex-col gap-y-3 opacity-80" >
            <span className="text-getir-logo-bg text-[18px]">
              Yardıma mı ihtiyacınız var?
            </span>
            <span>Sıkça Sorulan Sorular</span>
            <span>Kişisel Verilerin Korunması</span>
            <span>Gizlilik Politikası</span>
            <span>Kullanım Koşulları</span>
            <span>Çerez Politikası</span>
            <span>İşlem Rehberi</span>
          </div>
          <div className="flex flex-col gap-y-3 opacity-80">
            <span className="text-getir-logo-bg text-[18px]">
              İş Ortağımız Olun
            </span>
            <span>Bayimiz Olun</span>
            <span>Deponuzu Kiralayın</span>
            <span>GetirYemek Restoranı Olun</span>
            <span> GetirÇarşı İşletmesi Olun</span>
            <span> Zincir Restoranlar</span>
          </div>

          {/* className="h-[84px] w-[72px] bg-white shadow-lg p-4 !box-content" */}

          <div className="h-[84px] w-[72px] bg-white shadow-lg p-4 !box-content" >
            <GetirWebImage />
          </div>

          
        </div>
        <div className="h-[2px] w-full bg-gray-100 mt-8"></div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-8 text-xs opacity-80 text-getir-purple">
            <span>©2023 Getir</span>
            <ul className="list-disc">
              <li>Bilgi Toplumu Hizmetleri</li>
            </ul>
          </div>

          <div className="flex items-center gap-x-4 opacity-50 text-sm">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <div className="flex items-center space-x-2 rounded-md border border-gray-200 py-1 px-2">
            <RiGlobalLine/>
            <span>Türkçe (TR)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
