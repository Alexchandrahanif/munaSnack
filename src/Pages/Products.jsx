import React from "react";
import ImgBanner from "../../public/banner-01.svg";
import ImgDummy from "../assets/dummy-products.jpg";

const Products = () => {
    const dataProducts = [
        {
            id: 0,
            img: ImgDummy,
            category: 'PEDAS, ORIGINAL',
            name: 'Makaroni',
            description: 'Rasakan kenikmatan makaroni lezat dengan saus spesial yang menggugah selera Anda.',
            price: 5000,
        },
        {
            id: 1,
            img: ImgDummy,
            category: 'BALADO, ORIGINAL',
            name: 'Keripik Usus',
            description: 'Nikmati kelezatan keripik usus istimewa kami yang selalu menggoda selera Anda.',
            price: 5000,
        },
        {
            id: 2,
            img: ImgDummy,
            category: 'COKLAT, STRAWBERRY, VANILLA, MACHA',
            name: 'Twister',
            description: 'Nikmati kelezatan Twister kami yang memikat, memberikan sensasi yang tak terlupakan.',
            price: 5000,
        },
        {
            id: 3,
            img: ImgDummy,
            category: 'PEDAS',
            name: 'Kerupuk Jablay',
            description: 'Nikmati sensasi pedas yang menggoda dari kerupuk jablay khas kami.',
            price: 5000,
        },
    ];

    return (
        <div className="w-full items-center pt-[90px] pr-[60px] pb-[125px] pl-[60px] font-play bg-white">
            <div className="text-[40px] text-center text-darkBrown font-bold">Produk</div>
            <div className="text-[18px] text-center text-[#5E6E89] mt-15">Puaskan Selera Anda atau Rekan Kerja dengan Cemilan Istimewa Ini</div>
            <div className="mt-[60px] flex gap-[60px] flex-wrap">
                {dataProducts.map((items) => {
                    return (
                        <div key={items.id} className="w-[394.66px] flex flex-col gap-[16px]">
                            <img className="h-[240px] w-full bg-slate-100 object-cover" src={items.img} alt={items.name} />
                            <div className="w-full">
                                <div className="text-[12px] text-[#333] font-bold">{items.category}</div>
                                <div className="text-[18px] text-[#333] font-semibold my-[6px]">{items.name}</div>
                                <p className="text-[14px] text-[#333] font-normal my-[6px] leading-[1.3rem]">{items.description}</p>
                            </div>
                            <div className="items-center" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                                <span className="text-[24px] text-brown font-semibold">Rp {items.price}</span>
                                <div className="flex items-end justify-end">
                                    <button className="text-[#fff] text-[14px] w-[160px] font-semibold bg-brown h-[38px] hover:cursor-pointer hover:bg-darkBrown">PESAN</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Products;
