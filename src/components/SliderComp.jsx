import Slider from "react-slick";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";

export default function SliderComp() {
  const [selected, setSelected] = useState("TR");
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
  };

  const phoneCodes = {
    US: "+40",
    GB: "+31",
    FR: "+20",
    DE: "+10",
    IT: "+99",
    TR: "+90",
  };

  return (
    <div className=" relative before:absolute before:inset-0 before:w-full before:h-[500px] before:z-10 before:bg-gradient-to-r before:from-getir-logo-bg before:to-transparent">
      <Slider className="overflow-hidden h-[500p]" {...settings}>
        <div>
          <img
            className="h-[500px] w-full object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
          />
        </div>
        <div>
          <img
            className="h-[500px] w-full object-cover"
            src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
          />
        </div>
      </Slider>

      {/* ABSOLUTE ITEMS */}
      <div className="absolute top-0 left-0 w-full h-[500px] z-20 ">
        <div className="mx-[132px] h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-10">
            <img
              className="w-44 h-44"
              src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            />
            <span className="text-white text-[36px] w-[450px] leading-9 font-medium tracking-tight">
              Dakikalar içerisinde kapınızda
            </span>
          </div>
          <div className="w-[400px] rounded-xl bg-white flex flex-col items-center gap-y-4 p-6 text-getir-logo-bg font-medium">
            <div className="font-bold">
              <p>Giriş yap veya kayıt ol</p>
            </div>
            <div className="flex gap-x-3 items-center">
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                countries={["US", "GB", "FR", "DE", "IT", "TR"]}
                customLabels={phoneCodes}
                placeholder="Select Language"
                selectedSize={16}
                optionsSize={16}
                className=""
              />
              <input
                className="border h-[45px] rounded-[5px] border-flag-border p-4 outline-none"
                type="tel"
                placeholder="Telefon numarası"
              />
            </div>
            <div className="bg-getir-yellow cursor-pointer text-xs tracking-wide font-semibold w-full flex justify-center items-center
             text-getir-logo-bg rounded-md p-4 hover:bg-getir-purple hover:text-getir-yellow transition-all">
              <p>Telefon numarası ile devam et</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
