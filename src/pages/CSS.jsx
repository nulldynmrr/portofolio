import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const CSS = () => {
  return (
    <div id="bg-case" className="w-full pb-12 h-[9999px]">
      <header
        id="bg-elemen-case"
        className="flex flex-col justify-center items-center relative h-[300px] overflow-hidden px-[40px] md:px[160px] lg:px-[200px] text-white"
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

          <h4 className="text-xl font-bold mt-8">
            Contoh Struktur HTML dan CSS
          </h4>
          <pre className="bg-[#0B1120] p-4 rounded-lg mt-2 border-gray-300">
            <code>&lt;link rel="stylesheet" href="styles.css"&gt;</code>
          </pre>
          <p className="text-[18px] text-justify">
            Pada file HTML, kita menggunakan tag <code>&lt;link&gt;</code> untuk
            menghubungkan file CSS ke dalam dokumen HTML.
          </p>

          <h3 className="text-2xl font-bold mt-8">
            Sintaks untuk Menerapkan Gaya CSS
          </h3>
          <p className="text-[18px] text-justify">
            Semua kode CSS terdiri dari aturan. Aturan adalah sekumpulan
            properti dan nilai yang akan diterapkan pada elemen tertentu. Aturan
            CSS harus berisi yang berikut ini:
            <ul className="list-disc pl-8 space-y-2">
              <li>
                <strong>Pemilih:</strong> Elemen yang akan dimodifikasi.
              </li>
              <li>
                <strong>Properti:</strong> Karakteristik yang akan dimodifikasi.
              </li>
              <li>
                <strong>Nilai:</strong> Nilai yang diterapkan pada properti.
              </li>
            </ul>
          </p>

          <h3 className="text-2xl font-bold mt-8">Jenis-Jenis Penyeleksi</h3>
          <p className="text-[18px] text-justify">
            Dalam CSS ada beberapa cara untuk memilih elemen HTML, yang dapat
            diklasifikasikan ke dalam 4 kelompok berikut ini:
          </p>
          <ul className="list-disc pl-8 space-y-2">
            <li>
              <strong>Pemilih Universal:</strong> Selektor ini memilih semua
              elemen dokumen.
            </li>
            <li>
              <strong>Pemilih Tag:</strong> Memilih semua elemen pada halaman
              yang tag HTML-nya sesuai dengan nilai pemilih.
            </li>
            <li>
              <strong>Pemilih Kelas:</strong> Memilih elemen berdasarkan kelas
              yang ditetapkan.
            </li>
            <li>
              <strong>Pemilih ID:</strong> Memilih elemen berdasarkan ID yang
              ditetapkan.
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8">Contoh Penggunaan CSS</h3>
          <pre className="bg-[#0B1120] p-4 rounded-lg mt-2 border-gray-300">
            <code>
              body &lt;br /&gt;
              {"{ "}
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;background-color: lightblue;
              <br />
              {"}"}
            </code>
          </pre>
          <p className="text-[18px] text-justify">
            Di atas adalah contoh penggunaan CSS untuk memberikan warna latar
            belakang biru muda pada halaman.
          </p>

          <h3 className="text-2xl font-bold mt-8">Penutupan CSS</h3>
          <p className="text-[18px] text-justify">
            CSS adalah bahasa yang sangat penting dalam desain web karena
            memungkinkan kita untuk memisahkan konten dan presentasi. Dengan
            pemahaman CSS yang baik, kita dapat menciptakan desain web yang
            responsif dan menarik.
          </p>
        </article>
      </section>
      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
        <Link to="/artikel">Kembali</Link>
      </button>
    </div>
  );
};

export default CSS;
