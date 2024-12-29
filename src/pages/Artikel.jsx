import React from "react";
import CardArtikel from "./../component/cardArtikel";
import { artikel } from "./../data/data";
import { Link } from "react-router-dom";

export const Artikel = () => {
  return (
    <div id="bg-case" className="w-full pb-12 min-h-[850px]">
      <header
        id="bg-elemen-case"
        className="flex flex-col justify-center items-center relative h-[300px] overflow-hidden px-[40px] md:px[160px] lg:px-[200px] text-white"
      >
        <h1 className="text-7xl font-weight mb-12 text-center pt-[120px]">
          Artikel
        </h1>
      </header>
      <section className="md:flex text-white px-[10px] md:px[160px] lg:px-[200px] mt-[50px] gap-x-[100px] ">
        <div className="flex flex-wrap gap-10 justify-center">
          {artikel.map((item, index) => (
            <CardArtikel
              key={index}
              image={item.image}
              title={item.title}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </div>
      </section>

      <button className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
        <Link to="/">Kembali</Link>
      </button>
    </div>
  );
};

export default Artikel;
