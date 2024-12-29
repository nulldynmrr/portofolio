import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export const Javascript = () => {
  return (
    <div id="bg-case" className="w-full pb-12 h-[9999px]">
      <header
        id="bg-elemen-case"
        className="flex flex-col justify-center items-center relative h-[300px] overflow-hidden px-[40px] md:px[160px] lg:px-[200px] text-white"
      >
        <h1 className="text-7xl font-weight mb-12 text-center pt-[120px]">
          Javascript
        </h1>
      </header>

      <section className="md:flex text-white px-[10px] md:px[160px] lg:px-[200px] mt-[50px] gap-x-[100px]">
        <article className="mt-6">
          <p className="text-[18px] text-justify">
            Javascript disingkat JS adalah Bahasa pemograman yang harus dimiliki
            untuk pembuatan website. HTML dan CSS sangat penting sekali untuk
            membuat tampilan website, namun untuk membuat website interaktif
            harus mengguanakn Bahasa javascript agar biar interaktif. Yuk, kita
            pelajari dan bahas lebih lanjut!
          </p>
          <h3 className="text-2xl font-bold mt-8">Sejarah Javascript.</h3>
          <p className="text-[18px] text-justify">
            Brendan Eich mulai menciptakan sebuah Bahasa pemograman ialah
            JavaScript bersama dengan Netscape yang di bawah naungan Mocha. Nama
            ini kemudian diubah menjadi LiveScript dan akhirnya disebut dengan
            JavaScript yang sering kita dengar. Javascript ini berfungsi untuk
            membuat sebuah efek untuk membuat sebuah website yang interaktif
            pada teks atau gambar yang terpenting adalah membuat AJAX atau
            Asynchronous JavaScript and XML, adalah teknik pengembangan web yang
            memungkinkan proses aktif dilakukan dalam satu halaman web.
          </p>

          <h3 className="text-2xl font-bold mt-8">
            JavaScript Menjadi Bahasa FullStack
          </h3>
          <p className="text-[18px] text-justify">
            Javascript bermula dikenal sebagai Bahasa pemograman yang beroperasi
            di sisi klien (browser), tapi adanya teknologi NodeJS yang
            memungkinkan JavaScript di run di luar browser, sekarang Bahasa ini
            banyak digunakan untuk pengembangan aplikasi di sisi server. Ini
            menjadikannya bahasa FullStack karena dapat mendukung pengembangan
            aplikasi di frontend dan backend.
          </p>

          <h3 className="text-2xl font-bold mt-8">
            Memulai Belajar JavaScript
          </h3>
          <p className="text-[18px] text-justify">
            Untuk memulai belajar Bahasa pemograman JavaScript, ada beberapa
            perangkat lunak yang harus disiapkan untuk support pengembangan.
            Pertama, membutuhkan sebuah browser diantaranya Google Chrome,
            Firefox, atau Microsoft Edge karena browser untuk menjalankan kode
            JavaScript. Kemudian adalah Text Editor untuk menulis kode
            pemograman kita. Beberapa contoh diantaranya adalah adalah Visual
            Studio Code, Sublime Text, Atom, WebStorm, atau bahkan Notepad++.
          </p>

          <h3 className="text-2xl font-bold mt-8">Hello World</h3>
          <p className="text-[18px] text-justify">
            Ada dua cara untuk membuat kode JavaScript. Kita dapat membuatnya
            langsung di file HTML atau menggunakan ekstensi JavaScript.js dan
            kemudian mengimpornya ke dalam file HTML. Pada saat ini, kita akan
            menggunakan HTML langsung untuk membuat kode programnya lebih mudah.
          </p>
          <pre className="bg-[#0B1120] p-4 rounded-lg mt-2 border-gray-300">
            <code>
              &lt;html&gt;
              <br />
              &lt;head&gt;
              <br />
              &lt;script&gt;document.write('Hello World');&lt;/script&gt;
              <br />
              &lt;/head&gt;
              <br />
              &lt;/html&gt;
            </code>
          </pre>
          <p className="text-[18px] text-justify">
            Dalam satu file html, kita dapat membuat kode javascript dengan
            menggunakan satu file html dan javascript. Misalnya,
            file.writeln("hello world") akan menampilkan teks hello world.
          </p>

          <h4 className="text-xl font-bold mt-4">
            2. Hello World di file yang berbeda
          </h4>
          <pre className="bg-[#0B1120] p-4 rounded-lg mt-2 border-gray-300">
            <code>
              &lt;script src="scripts/hello-world.js"&gt;&lt;/script&gt;
            </code>
          </pre>
          <p className="text-[18px] text-justify">
            Hasil yang bisa kita dilihat di browser akan menghasilkan seperti
            gambar dibawah:
            <br />
            <em>&lt;Gambar Hello World&gt;</em>
          </p>

          <h3 className="text-2xl font-bold mt-8">Komentar</h3>
          <p className="text-[18px] text-justify">
            Komentar adalah baris kode yang tidak dijalankan oleh browser.
            Komentar digunakan untuk menambahkan catatan, deskripsi, dan
            penjelasan pada kode. Komentar diabaikan oleh browser. Komentar
            dapat dilakukan dengan cara ketika kita ingin mengomentar satu baris
            saja menggunakan <code>//(komentar)</code> namun infin mengomentari
            lebih dari satu baris dapat menggunakan <code>/*(komentar)*/</code>.
          </p>

          <h3 className="text-2xl font-bold mt-8">Titik Koma</h3>
          <p className="text-[18px] text-justify">
            Javascript ini adalah Bahasa pemograman yang bisa menambahkan titik
            koma di akhir kode, ini sama hal nya dengan Bahasa pemograman C/C++.
            Namun javascript sendiri boleh menggunakan titik koma (;) atau tidak
            tidak masalah.
          </p>

          <h3 className="text-2xl font-bold mt-8">Tipe data</h3>
          <ul className="list-disc pl-8 space-y-2">
            <li className="text-[18px] text-justify">
              <strong>Number</strong>
              <p>
                JavaScript hanya mendukung satu tipe data angka, yang dapat
                berupa angka bulat atau desimal. Banyak bahasa pemrograman lain
                yang memiliki berbagai jenis tipe data angka, termasuk integer,
                short, long, floating point, dan sebagainya, tidak seperti
                bahasa pemrograman lain, seperti Java dan C#. Semuanya
                digabungkan dalam JavaScript.
              </p>
            </li>
            <li className="text-[18px] text-justify">
              <strong>Boolean</strong>
              <p>
                Tipe data boolean hanya memiliki dua nilai, yaitu TRUE (benar)
                dan FALSE (salah). Meskipun sangat sederhana, tipe data boolean
                sering digunakan dalam berbagai fitur pemrograman, terutama
                dalam pembuatan alur logika program.
              </p>
            </li>
            <li className="text-[18px] text-justify">
              <strong>String</strong>
              <p>
                Tipe data string, juga dikenal sebagai tipe data teks, adalah
                tipe data yang terdiri dari kumpulan karakter kosong atau lebih.
                Sebelumnya, kita telah menggunakan string saat membuat program
                Hello World.
              </p>
            </li>
            <li className="text-[18px] text-justify">
              <strong>Undefined</strong>
              <p>
                Undefined merupakan tipe datanya yang spesial hanya memiliki
                nilai undefined. Jenis tipenya bisa terbentuk pada suatu
                variabel yang tidak memiliki nilainya.
              </p>
            </li>
            <li className="text-[18px] text-justify">
              <strong>Symbol</strong>
              <p>
                Tipe data symbol yang merupakan tipe data baru setelah kehadiran
                ECMAScript 6 (ES6). Tipe data simbol yang digunakan sebagai
                pengenal properti objeknya.
              </p>
            </li>
            <li className="text-[18px] text-justify">
              <strong>Null</strong>
              <p>
                Null yang merupakan tipe data dan null juga sebuah nilai. Tipe
                data ini hanya bernilai null. Meskipun nilai null yang terbilang
                tidak memiliki nilainya.
              </p>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-8">Variabel</h3>
          <p className="text-[18px] text-justify">
            Data disimpan di variable. Dengan menyimpan data di dalamnya, kita
            dapat menggunakannya lagi dengan menyebutkan nama variablenya. Untuk
            membuat variable di JavaScript, kita bisa menggunakan kata kunci var
            diikuti dengan nama variablenya. Karena JavaScript adalah bahasa
            yang dinamis, variablenya tidak terikat pada satu tipe data saja.
            Sebaliknya, mereka dapat mengubah tipe data dengan variable yang
            sama. Kita dapat mengubah nilai atau nilai variable setelah
            dideklarasikan dengan menggunakan perintah "nama variable" diikuti
            dengan tanda = lalu diikuti dengan nilai atau nilainya. Jika kita
            mengubah data, tidak sulit untuk mengubah semuanya.
          </p>
          <pre className="bg-[#0B1120] p-4 rounded-lg mt-2 border-gray-300">
            <code>
              var nama = "Akbar";
              <br />
              var umur = 20;
              <br />
              console.log(nama);
              <br />
              console.log(umur);
            </code>
          </pre>
          <p className="text-[18px] text-justify">
            Penggunaan variabel sebelum tahun 2015 hanya var yang dapat
            digunakan untuk membuat variable. Namun, sejak versi ECMAScript 2015
            diperkenalkan kata kunci let dan const baru untuk membuat variable.
            Karena masalah dengan desain awal var, JavaScript tidak lagi
            menggunakan kata kunci var untuk membuat variable, tetapi diganti
            dengan let. Seperti kata kunci var, kita dapat mengubah data
            variable dengan cara apa pun yang kita suka, tetapi kata kunci let
            memungkinkan value variable tidak dapat diubah lagi. Variable jenis
            ini juga disebut sebagai konstanta.
          </p>

          <h3 className="text-2xl font-bold mt-8">Aritmatika</h3>
          <p className="text-[18px] text-justify">
            Operator aritmatika, juga disebut sebagai operator yang juga
            digunakan untuk melakukan perhitungan, adalah operator yang sering
            digunakan dalam operasi perhitungan otomatis. Javascript memiliki
            beberapa operator, termasuk penambahan, pengurangan, perkalian,
            eksponensial, pembagian, dan sisa. Dengan menggunakan tanda (+),
            kita dapat menambahkan string dan variable. Kami juga dapat
            memanggil variable beberapa kali untuk di eksekusi di dalamnya.
          </p>
        </article>
      </section>
      <button className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition duration-300">
        <Link to="/artikel">Kembali</Link>
      </button>
    </div>
  );
};

export default Javascript;
