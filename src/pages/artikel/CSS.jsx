import React from "react";
import { Link } from "react-router-dom";
import ".././home.css";
import imgHtml from "./../../asset/exampleHtml.png";
import imgCss from "./../../asset/exampleCss.png";
import imgHasil from "./../../asset/exampleResult.png";
import imgStrukturCSS from "./../../asset/struktur-css.png";
import imgUniversal from "./../../asset/universal.png";
import imgKelas from "./../../asset/kelas.png";
import imgTag from "./../../asset/tag.png";

export const CSS = () => {
  return (
    <div id="bg-case" className="w-full pb-12">
      <header
        id="bg-elemen-case"
        className="flex flex-col justify-center items-center relative h-[450px] overflow-hidden px-[40px] md:px[160px] lg:px-[200px] text-white"
      >
        <h1 className="text-7xl font-weight mb-12 text-center pt-[120px]">
          CSS
        </h1>
      </header>

      <section className="md:flex text-white px-[10px] md:px[160px] lg:px-[200px] mt-[50px] gap-x-[100px]">
        <article className="mt-6">
          <p className="text-[18px] text-justify">
            CSS, singkatan dari Cascading Style Sheets, adalah bahasa yang
            digunakan untuk mengelola warna pada dokumen, menyesuaikan ukuran,
            dan menambahkan jenis huruf, di antara fitur-fitur lainnya.
          </p>

          <h3 className="text-2xl font-bold mt-8">Sejarah CSS</h3>
          <p className="text-[18px] text-justify">
            CSS pertama kali diusulkan oleh Hakon Wium Lie pada 10 Oktober 1994,
            pada saat itu, Lie sedang bekerja dengan Tim Berners-Lee di CERN.
            Beberapa bahasa style sheet lain untuk web diusulkan pada waktu yang
            hampir bersamaan, dan pada World Wide Web Consortium menghasilkan
            Rekomendasi W3C CSS (CSS1) pertama yang dirilis pada tahun 1996.
          </p>

          <h3 className="text-2xl font-bold mt-8">
            Menghubungkan CSS ke Dokumen HTML
          </h3>
          <p className="text-[18px] text-justify">
            Dokumen CSS adalah file teks di mana serangkaian perintah (pemilih
            dengan properti dan nilai) ditulis dan klien web (browser)
            bertanggung jawab untuk menafsirkan dan menerapkan gaya pada dokumen
            HTML yang terkait.
          </p>

          <h4 className="text-xl font-bold mt-8">Index.html</h4>
          <img src={imgHtml} className="w-full" alt="Contoh HTML" />

          <h4 className="text-xl font-bold mt-8">Style.css</h4>
          <img src={imgCss} className="w-full" alt="Contoh CSS" />

          <h4 className="text-xl font-bold mt-8">
            Jika kita membuka file HTML di browser, kita akan menemukan output
            berikut ini:
          </h4>
          <img src={imgHasil} className="w-full" alt="Hasil" />

          <h3 className="text-2xl font-bold mt-8">
            Sintaks untuk Menerapkan Gaya CSS
          </h3>
          <p className="text-[18px] text-justify">
            Semua kode CSS terdiri dari aturan. Aturan adalah sekumpulan
            properti dan nilai yang akan diterapkan pada elemen tertentu. Aturan
            CSS harus berisi yang berikut ini:
            <ul className="list-disc pl-8 space-y-2">
              <li>
                <strong>Selector</strong> Elemen yang akan dimodifikasi.
              </li>
              <li>
                <strong>Property</strong> Karakteristik yang akan dimodifikasi.
              </li>
              <li>
                <strong>Value</strong> Nilai yang diterapkan pada properti.
              </li>
            </ul>
          </p>
          <img src={imgStrukturCSS} className="mt-8" alt="Struktur CSS" />

          <h3 className="text-2xl font-bold mt-8">Jenis-Jenis Penyeleksi</h3>
          <p className="text-[18px] text-justify">
            Dalam CSS ada beberapa cara untuk memilih elemen HTML, yang dapat
            diklasifikasikan ke dalam 4 kelompok berikut ini:
          </p>
          <ul className="list-disc pl-8 space-y-2 text-[18px] ">
            <li>
              <strong>Pemilih Universal</strong>
              <p>
                Selektor ini memilih semua elemen dokumen. Selektor ini biasanya
                digunakan untuk melakukan pemformatan umum dan standarisasi CSS
                di browser.
              </p>
              <img src={imgUniversal} alt="style Universal" />
            </li>
            <li>
              <strong>Pemilih Tag</strong>
              <p>
                Memilih semua elemen pada halaman yang tag HTML-nya sesuai
                dengan nilai pemilih. Selektor ini biasanya digunakan untuk
                membuat modifikasi struktural pada dokumen, seperti jenis huruf
                dan ukuran teks.
              </p>
              <img src={imgTag} alt="style tag" />
            </li>
            <li>
              <strong>Pemilih Kelas</strong>
              <p>
                Memilih sekumpulan elemen halaman yang kelas atributnya sesuai
                dengan nama yang diberikan. Jenis pemilih ini dimulai dengan .
                diikuti dengan nama kelas. Jenis pemilih ini biasanya digunakan
                untuk menata sekelompok elemen.
              </p>
              <img src={imgKelas} alt="style kelas" />
            </li>
          </ul>
        </article>
      </section>
      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
        <Link to="/artikel">Kembali</Link>
      </button>
    </div>
  );
};

export default CSS;
