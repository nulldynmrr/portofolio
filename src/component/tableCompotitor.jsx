import React from "react";
import { SiNetflix } from "react-icons/si";
import { FaCheckSquare, FaWindowClose, FaYoutube } from "react-icons/fa";
import { TbBrandDisney } from "react-icons/tb";
import imgVidio from "./../asset/Vidio_logo.svg";
import imgIflix from "./../asset/iflix.svg";
import imgMovApp from "./../asset/MovApp.svg";

const TableCompotitor = () => {
  return (
    <div className="mt-10">
      <div className="card w-full grid grid-cols-8 gap-4 font-light text-[16px] md:text-[20px]">
        <div className="w-full mr-2 flex flex-col items-center justify-center gap-y-2 col-span-2 p-2 text-center"></div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <img
            src={imgMovApp}
            alt="logo movapp"
            className="min-w-[20px] md:w-full overflow-hidden"
          />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <SiNetflix className="text-2xl text-red-600" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <TbBrandDisney className="text-2xl text-blue-800" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaYoutube className="text-2xl text-red-600" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <img
            src={imgVidio}
            alt="logo Vidio"
            className="min-w-[25px] md:w-full overflow-hidden"
          />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <img
            src={imgIflix}
            alt="logo iflix"
            className="min-w-[25px] md:w-full overflow-hidden"
          />
        </div>

        {/*section 1*/}
        <div className="w-full mr-2 text-[12px] md:text-[16px] lg:text-xl overflow-hidden cardContent flex flex-col items-center justify-center gap-y-2 col-span-2 p-2 text-center">
          Menyediakan Layanan Streaming
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>

        {/*section 2*/}
        <div className="w-full mr-2 text-[12px] md:text-[16px] lg:text-xl overflow-hidden cardContent flex flex-col items-center justify-center gap-y-2 col-span-2 p-2 text-center">
          Berlangganan
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaWindowClose className="text-red-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>

        {/*section 3*/}
        <div className="w-full mr-2 text-[12px] md:text-[16px] lg:text-xl overflow-hidden cardContent flex flex-col items-center justify-center gap-y-2 col-span-2 p-2 text-center">
          Tidak Ada iklan
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaWindowClose className="text-red-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>

        {/*section 4*/}
        <div className="w-full mr-2 text-[12px] md:text-[16px] lg:text-xl overflow-hidden cardContent flex flex-col items-center justify-center gap-y-2 col-span-2 p-2 text-center">
          Fitur List
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaWindowClose className="text-red-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>

        {/*section 5*/}
        <div className="w-full mr-2 text-[12px] md:text-[16px] lg:text-xl overflow-hidden cardContent flex flex-col items-center justify-center gap-y-2 col-span-2 p-2 text-center">
          Fist Add Library
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaWindowClose className="text-red-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaWindowClose className="text-red-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaWindowClose className="text-red-600 text-xl" />
        </div>

        {/*section 5*/}
        <div className="w-full mr-2 text-[12px] md:text-[16px] lg:text-xl overflow-hidden cardContent flex flex-col items-center justify-center gap-y-2 col-span-2 p-2 text-center">
          Konten Eklusif
        </div>
        <div className="cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaWindowClose className="text-red-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaCheckSquare className="text-green-600 text-xl" />
        </div>
        <div className="w-1/9 cardContent w-full flex flex-col items-center justify-center gap-y-2 col-span-1 p-2 text-center">
          <FaWindowClose className="text-red-600 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TableCompotitor;
