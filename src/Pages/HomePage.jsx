import React from "react";
import ImgBanner from "../../public/banner-01.svg";

const HomePage = () => {
  return (
    <div className="w-full items-center bg-slate-400">
      <div className="relative max-h-705px flex justify-center items-center">
        <img className="object-cover h-full" src={ImgBanner} />
        <div className="bg-[#F7F8FA]/80 backdrop-blur-[24px] absolute pt-[33px] pr-[96px] pb-[63px] pl-[94px] max-w-[730px] max-h-[349px] flex justify-center items-center flex-col">
          <div className="text-5xl text-center text-[#1D252C]">Gurih Hemat Menggoda</div>
          <div className="text-lg text-center mt-[8px] text-[#1D252C]">Nikmati sensasi manis dan gurih dengan cemilan istimewa kami di Muna-Snacks!</div>
          <div className="bg-[#56B280] mt-[45px] w-max rounded text-white">
            <div className="py-[8px] px-[44px]">
              Temukan koleksi kami
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
