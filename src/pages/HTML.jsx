import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const HTML = () => {
  return (
    <div id="bg-case" className="w-full pb-12 bg-gray-900 text-white">
      <header
        id="bg-elemen-case"
        className="flex flex-col justify-center items-center relative h-[300px] overflow-hidden px-[40px] md:px-[160px] lg:px-[200px] text-white bg-gradient-to-r from-blue-500 to-purple-600"
      >
        <h1 className="text-7xl font-extrabold mb-6 text-center pt-[120px] drop-shadow-md">
          HTML
        </h1>
        <p className="text-xl text-center font-light max-w-3xl">
          Tentang HTML, mulai dari sejarah, struktur, hingga tips belajar. Yuk,
          pelajari bersama!
        </p>
      </header>

      <section className="text-[18px] text-justify md:flex flex-col text-white px-[20px] md:px-[160px] lg:px-[200px] mt-[50px] space-y-10">
        <article className="bg-card p-8 rounded-lg shadow-lg">
          <p className="leading-8">
            Kamu tahu nggak kalau semua website yang pernah kamu buka itu punya
            tiga teknologi dasar yang sama? Yup, mereka adalah HTML, CSS, dan
            JavaScript. Artikel ini pas banget buat kamu yang baru mulai belajar
            ngoding atau penasaran gimana cara website bekerja. Disini saya akan
            membahas mengenai HTML terlebih dulu. Yuk! Baca terus sampai tuntas
            ya…
          </p>
        </article>

        <article className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 border-b-2 pb-2">
            Sejarah dan Pengenalan HTML
          </h2>
          <p className="leading-8">
            Seorang ahli fisika, seorang kontraktor di CERN (Organisasi Eropa
            untuk Riset Nuklir) yang benama Tim Berners-Lee pada tahun 1980
            mengusulkan sebuah sistem untuk ilmuwan CERN dalam membagi dokumen.
            Sembilan tahun kemudian dia mengembangkan sebuah inovasi atau ide
            tentang sistem markah berbasis internet. Berners-Lee tidak hanya
            merancang HTML tetapi menulis perangkat lunaknya, bersama Robert
            Cailliau, seorang insinyur sistem di CERN, mereka mencoba mengajukan
            proposalnya. Namun sayangnya, proposal ditolak oleh Perusahaan CERN.
            Namun, Berners-Lee tetap berusaha dengan tekadnya agar bisa
            terwujud. Di catatan pribadinya dia bahkan sudah membayangkan
            bagaimana hypertext dapat digunakan, salah satunya bisa digunakan
            untuk berbagai hal, seperti menghubungkan informasi di dalam dokumen
            secara online lebih mudah. Akhirnya pada akhir tahun 1991 HTML resmi
            disebar ke publik.
          </p>
          <p className="leading-8 mt-8">
            HyperText Markup Language (HTML) adalah bahasa standar yang
            digunakan untuk membangun struktur dasar halaman web. Berbeda dengan
            bahasa pemograman umumnya, yang berfokus pada logika atau
            perhitungan melainkan HTML berfokus pada penanda dan markup yang
            memberi tahu browser bagaimana konten, seperti teks atau gambar,
            harus ditampilkan di layar.
          </p>
          <p className="leading-8 mt-8">
            HTML bekerja menggunakan elemen-elemen yang disebut “tag”, seperti
            tag untuk heading, paragraf, tautan gambar, dan lain-lain. Tag ini
            biasanya memiliki pasangan berupa tag pembuka dan tag penutup, yang
            mengantur bagaimana konten terlihat dan terstruktur di browser.
          </p>
        </article>

        <article className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 border-b-2  pb-2">
            Struktur HTML
          </h2>
          <p className="leading-8">
            Pada HTML ada beberapa struktur yang harus kamu ketahui, diantaranya
            terdapat 3 komponen yaitu Tag, Elemen dan Atribut. Kalau masih
            bingung, ini penjelasannya.
          </p>
          <ol className="list-decimal pl-8 space-y-4">
            <li>
              <strong>Tag</strong>
              <br />
              Adalah suatu penanda awal dan akhir pada HTML. Tag ini dibungkus
              menggunakan siku (<code>&lt;&gt;</code>). Terdapat dua jenis tag
              dalam HTML yaitu tag dengan penutup ada juga tag tanpa penutup.
              <br />
              Contoh untuk tag dengan penutup, yaitu:
              <ul className="list-disc pl-8">
                <li>
                  <code>&lt;p&gt;...&lt;/p&gt;</code> untuk paragraf.
                </li>
                <li>
                  <code>&lt;body&gt;...&lt;/body&gt;</code> untuk badan halaman.
                </li>
                <li>
                  <code>&lt;title&gt;...&lt;/title&gt;</code> untuk judul
                  halaman.
                </li>
              </ul>
              Contoh untuk tag tanpa penutup, yaitu:
              <ul className="list-disc pl-8">
                <li>
                  <code>&lt;br&gt;</code> untuk membuat baris baru.
                </li>
                <li>
                  <code>&lt;img&gt;</code> untuk menyisipkan gambar.
                </li>
                <li>
                  <code>&lt;hr&gt;</code> untuk membuat garis horizontal.
                </li>
              </ul>
              Contoh pengaplikasian tag:
              <pre className="bg-[#0B1120] p-4 rounded-lg mt-2 border-gray-300">
                <code>&lt;h1&gt;Title&lt;/h1&gt;</code>
              </pre>
            </li>
            <li>
              <strong>Elemen</strong>
              <br />
              Adalah tag yang lebih lengkap daripada tag. Sebuah elemen terdiri
              dari:
              <ul className="list-disc pl-8">
                <li>
                  Tag pembuka, seperti <code>&lt;p&gt;</code> atau
                  <code>&lt;a&gt;</code>.
                </li>
                <li>Konten di dalamnya (kalau ada).</li>
                <li>
                  Tag penutup (kalau dibutuhkan), seperti
                  <code>&lt;/p&gt;</code> atau <code>&lt;/a&gt;</code>.
                </li>
                <li>
                  Atribut (kalau ada), yang biasanya nempel di tag pembuka.
                </li>
              </ul>
              Contoh pengaplikasian elemen:
              <pre className="bg-[#0B1120] p-4 rounded-lg mt-2 border-gray-300">
                <code>&lt;p&gt;Ini paragraf.&lt;/p&gt;</code>
              </pre>
            </li>
            <li>
              <strong>Atribut</strong>
              <br />
              Adalah data tambahan untuk tag atau elemen. Walaupun tidak semua
              tag memiliki atribut, ada beberapa yang membutuhkan sebuah atribut
              seperti tag <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>, dan
              <code>&lt;video&gt;</code>.<br />
              Contoh pengaplikasian atribut:
              <pre className="bg-[#0B1120] p-4 rounded-lg mt-2 border-gray-300">
                <code>
                  &lt;a href="https://contoh.com"&gt;Tautan&lt;/a&gt;
                  <br />
                  &lt;img src="gambar.jpg" alt="Deskripsi gambar"&gt;
                </code>
              </pre>
            </li>
          </ol>
        </article>

        <article className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 border-b-2  pb-2">
            Hubungan antara HTML, CSS, dan JS
          </h2>
          <p className="leading-8">
            Ketika kita ingin membuat sebuah website, maka tiga teknologi dasar
            yaitu HTML, Javascript, dan CSS harus benar-benar kita pahami karena
            tiga teknologi ini saling melengkapi.
          </p>
        </article>

        <article className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 border-b-2  pb-2">
            Kelebihan HTML
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Sintaks yang sederhana dan mudah dipahami</li>
            <li>Sumber belajar mudah didapatkan</li>
            <li>Open-source tanpa biaya</li>
            <li>Dikelola oleh W3C</li>
            <li>Terstruktur</li>
            <li>Mudah dihubungkan dengan bahasa lain</li>
          </ul>
        </article>

        <article className="bg-card p-8 rounded-lg shadow-lg mt-6">
          <h2 className="text-3xl font-bold mb-4 border-b-2  pb-2">
            Kekurangan HTML
          </h2>
          <ul className="list-disc pl-8 space-y-2">
            <li>Banyak elemen yang harus diulang</li>
            <li>Fitur yang baru terkadang tidak bisa digunakan</li>
            <li>
              HTML digunakan untuk halaman web statis, sementara fitur
              interaktif memerlukan dukungan dari Javascript dll
            </li>
          </ul>
        </article>

        <article className="bg-card p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 border-b-2  pb-2">
            Tips Belajar HTML
          </h2>
          <ul className="list-decimal pl-8 space-y-2">
            <li className="font-semibold">Mulai dengan dasar</li>
            <p>
              Mulai dengan mempelajari tag HTML dasar seperti
              <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, dan
              <code>&lt;body&gt;</code>.
            </p>
            <li className="font-semibold">Praktek langsung</li>
            <p>
              Tanpa kamu pelajarin langsung maka kamu pasti bingung menggunakan
              HTML. Jagi langsung kita Praktikan langsung ke web yang sederhana.
            </p>
            <li className="font-semibold">
              Pakai Editor Teks yang mudah di gunakan
            </li>
            <p>
              Ada beberapa Editor Teks tapi kamu cari yang paling mudah
              digunakan, seperti Visual Studio Code. Karena visual studio code
              mempunyai beberapa extension yang bisa memudahkan untuk kamu.
            </p>
            <li className="font-semibold">Konsisten</li>
            <p>
              Walaupun HTML mudah digunakan tapi harus tetap konsisten untuk
              menggunakan HTML supaya tidak muda lupa.
            </p>
          </ul>
        </article>
      </section>

      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
        <Link to="/artikel">Kembali</Link>
      </button>
    </div>
  );
};

export default HTML;
