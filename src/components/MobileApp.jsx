import {
  AppStoreLogo,
  GooglePlayLogo,
  HuaweiLogo,
  IntroDiscount,
  IntroInMınutes,
  IntroMarketCourier,
  PhoneLanding,
} from "../ui/Logos";

const MobileApp = () => {
  return (
    <div className="bg-mobile-app-bg pt-5 pb-10 ">
      <div className="mx-[132px] h-[312px] ">
        {/* TOP SECTION */}
        <div className="h-full rounded-xl relative before:absolute before:inset-0 before:w-full before:h-full before:bg-purple-900 before:bg-opacity-30">
          <img
            className="object-cover h-full  w-full"
            src="https://cdn.getir.com/getirweb-images/common/illustration/doodle.png"
          />
          <div className="absolute top-0 left-0 w-full h-full pl-14">
            <div className="flex flex-col justify-center h-full gap-y-6">
              <p className="text-3xl text-white font-semibold tracking-tight">
                Getir&apos;i indirin
              </p>
              <span className="text-lg text-white font-semibold max-w-[360px] leading-5">
                İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.
              </span>
              <div className="flex gap-x-2">
                <AppStoreLogo />
                <GooglePlayLogo />
                <HuaweiLogo />
              </div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0">
            <PhoneLanding />
          </div>
        </div>
      </div>
      <div className="mx-[132px] mt-10">
        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-3 gap-x-4 ">
          <div className="bg-white flex flex-col px-15 py-5 items-center gap-y-4 shadow-md">
            <IntroInMınutes />
            <h3 className="text-getir-purple font-[600] opacity-90">Her siparişinize bir kampanya</h3>
            <span className="text-center opacity-60 text-sm">
              Getir’de vereceğiniz her siparişe uygun bir kampanya
              bulabilirsiniz.
            </span>
          </div>

          <div className="bg-white flex flex-col px-15 py-5 items-center gap-y-4 shadow-md">
            <IntroMarketCourier />
            <h3 className="text-getir-purple font-[600] opacity-90">Dakikalar içinde kapınızda</h3>
            <span className="text-center opacity-60 text-sm">
            Getir’le siparişiniz dakikalar içinde kapınıza gelir.
            </span>
          </div>

          <div className="bg-white flex flex-col px-15 py-5 items-center gap-y-4 shadow-md">
            <IntroDiscount />
            <h3 className="text-getir-purple font-[600] opacity-90">Binlerce çeşit mutluluk</h3>
            <span className="text-center opacity-60 text-sm">
            Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
