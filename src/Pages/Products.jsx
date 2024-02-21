import React from "react";
import ImgBanner from "../../public/banner-01.svg";

const Products = () => {
    return (
        <div className="w-full items-center pt-[90px] pr-[164px] pb-[125px] pl-[165px]">
            <div className="text-[40px] text-center text-[#0B254B]">Produk</div>
            <div className="text-[18px] text-center text-[#5E6E89] mt-15">Puaskan Selera Anda atau Rekan Kerja dengan Cemilan Istimewa Ini</div>
            <div className="mt-[60px]">
                <div className="w-[255px] h-[230px] bg-slate-200 drop-shadow">
                    <div className="h-[154px] bg-slate-100">1</div>
                    <div className="h-[76px] bg-white">
                        <div className="pt-[10px] pr-[26px] pb-[16px] pl-[26px]">
                            <div className="text-[16px] text-[#1D293F] font-medium">Makaroni</div>
                            <div className="text-right mt-[4px] text-[20px] text-[#56B280] font-medium	">Rp 5000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
