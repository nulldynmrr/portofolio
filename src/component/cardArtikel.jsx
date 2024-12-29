import React from "react";
import { Link } from "react-router-dom";
import imgExpertise from "./../asset/Cover Kalkulator.svg";

const CardArtikel = ({ image, title, desc, link }) => {
  return (
    <div className="rounded-lg overflow-hidden w-[345px] bg-[#112240] text-white border border-gray-300 shadow-md transform transition-transform hover:scale-105 hover:shadow-lg">
      <Link to={link || "/"}>
        <img
          src={image || imgExpertise}
          alt="Artikel"
          className="h-[180px] w-full object-cover"
        />
        <div className="p-4">
          <h1 className="text-lg font-bold mb-2">{title || "Judul Artikel"}</h1>
          <p className="text-sm text-gray-200">
            {desc || "Deskripsi artikel singkat."}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardArtikel;
