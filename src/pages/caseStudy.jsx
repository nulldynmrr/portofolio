import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Table from "./../component/tableCompotitor";

import imgHeader from "./../asset/bg-Ilustrasi.svg";
import imgProfileUserPersona from "./../asset/Gee_Formal.jpg";
import imgUserFlow from "./../asset/User Flow.svg";

import imgSplashWireframe from "./../asset/Wireframe Splash Screen.svg";
import imgOnboardingWireframe from "./../asset/Wireframe  on borading.svg";
import imgLoginWireframe from "./../asset/Wireframe Log in.svg";
import imgSignupWireframe from "./../asset/Wireframe Sign Up.svg";
import imgHomeWireframe from "./../asset/Wireframe  home page.svg";
import imgInformationMoveWireframe from "./../asset/Wireframe information movie.svg";
import imgMovieWireframe from "./../asset/Wireframe  movie.svg";
import imgAddLibraryWireframe from "./../asset/Wireframe add library.svg";

import imgSplash from "./../asset/Splash Screen.svg";
import imgOnboarding from "./../asset/on boarding.svg";
import imgLogin from "./../asset/login.svg";
import imgSignup from "./../asset/signup.svg";
import imgHome from "./../asset/home page 1.svg";
import imgInformationMove from "./../asset/information movie.svg";
import imgMovie from "./../asset/movie.svg";
import imgAddLibrary from "./../asset/add library.svg";

export const Case = () => {
  return (
    <div id="bg-case" className="w-full pb-12">
      <header
        id="bg-elemen-case"
        className="flex flex-col justify-center items-center relative h-[450px] overflow-hidden px-[40px] md:px[160px] lg:px-[200px] text-white"
      >
        <h1 className="text-7xl font-weight mb-12">Aplikasi Walkest</h1>
        <img src={imgHeader} alt="ilustrasi header" />
      </header>
      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[150px] gap-x-[100px] ">
        <h1 className="md:min-w-[300px] colorTitle text-4xl md:text-6xl font-semibold">
          Overview
        </h1>

        <p className="md:w-full font-light text-[16px] md:text-[20px] text-justify mt-4">
          Aplikasi MoveApp adalah aplikasi platform untuk menonton film secara
          langsung dengan menawarkan layanan film Indonesia maupun luar negeri,
          yang dapat dihubungkan di berbagai device seperti tablet, komputer dan
          televisi.
        </p>
      </section>
      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[80px] gap-x-[100px] ">
        <h1 className="md:max-w-[300px] colorTitle text-4xl md:text-6xl font-semibold">
          Problem Statement
        </h1>

        <ol className="md:w-full font-light text-[16px] md:text-[20px] text-justify mt-4 list-decimal pl-4">
          <li>Mencari film yang baru sulit untuk dicari.</li>
          <li>
            Tidak semua orang mempunyai waktu luang untuk pergi ke bioskop.
          </li>
          <li>
            Orang-orang sering bingung memilih film karena banyak pilihan.
          </li>
        </ol>
      </section>
      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[80px] gap-x-[100px] ">
        <h1 className="md:min-w-[300px] colorTitle text-4xl md:text-6xl font-semibold">
          Solutions
        </h1>

        <ol className="md:w-full font-light text-[16px] md:text-[20px] text-justify mt-4 list-decimal pl-4">
          <li>
            Merekomendasikan user untuk menontotn film yang banyak diminati
          </li>
          <li>Membuat layanan platform untuk menonton film.</li>
          <li>Membuat navigasi yang mudah untuk mencari dan memilih film</li>
        </ol>
      </section>
      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[80px] gap-x-[100px] ">
        <h1 className="md:min-w-[300px] colorTitle text-4xl md:text-6xl font-semibold">
          Purpose
        </h1>

        <ol className="md:w-full font-light text-[16px] md:text-[20px] text-justify mt-4 list-decimal pl-4">
          <li>Untuk memudahkan mencari film secara langsung kepada pengguna</li>
          <li>
            Untuk memudahkan orang-orang untuk menonton film, tidak harus pergi
            jauh
          </li>
          <li>Untuk memberikan pengalaman menonton film yang nyaman</li>
        </ol>
      </section>
      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[80px] gap-x-[100px] ">
        <h1 className="md:max-w-[300px] colorTitle text-4xl md:text-6xl font-semibold">
          White Paper Research
        </h1>

        <p className="md:w-full font-light text-[16px] md:text-[20px] text-justify mt-4">
          Berdasarkan data dari
          <span className="mx-2 italic">
            Programe for International Student Assessment
          </span>
          (PISA) menyatakan bahwa masyarakat Indonesia dengan usia 10 tahun ke
          atas lebih mensukai menonton film daripada membaca buku. Pengguna
          aktif yang menyukai menonton film dengan
          <span className="bg-[#1E293B] text-yellow-400 px-2 font-normal mx-1">
            usia 20-27 tahun berada pada 51,6% pengguna aktif dan 10-19 tahun
            34,1% pengguna aktif.
          </span>
          Hal ini menunjukkan potensi pasar yang besar dalam menyediakan layanan
          platform <span className="mx-1 italic">streaming</span> film.
        </p>
      </section>

      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[80px] gap-x-[100px] ">
        <h1 className="md:max-w-[308px] colorTitle text-4xl md:text-6xl font-semibold">
          Kompetitor Analysis
        </h1>
        <Table />
      </section>

      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[80px] gap-x-[100px] ">
        <h1 className="md:min-w-[300px] colorTitle text-4xl md:text-6xl mb-6 font-semibold">
          User Interview
        </h1>

        <div className="space-y-6">
          <p className="md:w-full font-light text-[16px] md:text-[20px] text-justify">
            Untuk mengetahui <span className="mx-1 italic">problem user</span>,
            saya melakukan wawancara kepada pengguna yang memahami berbagai
            perilaku pengguna dan kendala yang terjadi dalam penggunaan
            aplikasi. Tujuan wawancara ini adalah untuk mengetahui perilaku
            pengguna dan masalah yang sering timbul di aplikasi
            <span className="mx-1 italic">streaming</span> film.
          </p>
          <h1 className="md:w-full font-semibold text-xl md:text-[20px] text-justify">
            Question Interview
          </h1>
          <ol className="md:w-full font-light text-[16px] md:text-[20px] text-justify list-decimal pl-4">
            <li>Apa pendapat kamu tentang aplikasi menonton film?</li>
            <li>Kenapa kamu menonton film lewat aplikasi?</li>
            <li>Bagaimana pengalaman kamu saat menonton film di aplikasi? </li>
            <li>
              Fitur apa yang menurut kamu bisa ditambahkan di aplikasi ini?
            </li>
            <li>
              Pernah merasa frustasi menggunakan aplikasi film? Apa penyebabnya?
            </li>
            <li>Apa harapan kamu untuk aplikasi menonton film ke depannya?</li>
          </ol>
          <h1 className="md:w-full font-semibold text-xl md:text-[20px] text-justify">
            Results Interview
          </h1>
          <ol className="md:w-full font-light text-[16px] md:text-[20px] text-justify list-disc pl-4">
            <li>
              Pengguna menggunakan aplikasi untuk mengisi waktu luang dan
              mencari hiburan.
            </li>
            <li>
              Menghargai pengalaman menonton yang seru dan kemudahan yang
              ditawarkan oleh aplikasi.
            </li>
            <li>
              Frustrasi muncul dari harga langganan yang mahal, koleksi film
              yang tidak lengkap, dan keterbatasan subtitle dalam berbagai
              bahasa.
            </li>
            <li>
              Pengguna menginginkan fitur tambahan seperti "add library" untuk
              menyimpan daftar film favorit.
            </li>
          </ol>
        </div>
      </section>
      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[80px] gap-x-[100px] ">
        <h1 className="md:min-w-[300px] colorTitle text-4xl md:text-6xl font-semibold">
          User Persona
        </h1>
        <div>
          <div className="mt-8 flex gap-x-8">
            <div className="min-w-[100px] h-[100px] md:min-w-[150px] md:h-[150px]">
              <img
                src={imgProfileUserPersona}
                alt="foto"
                className="bg-white w-full h-full mb-8 rounded-full"
              />
            </div>
            <div>
              <h1 className="text-3xl">Gee</h1>
              <p className="text-justify font-thin text-opacity-60 text-white">
                Dia adalah seorang mahasiswa Telkom University yang sedang
                menempuh S1 Infomatika dengan memiliki ketertarikan terhadap
                film, ia sering menggunakan aplikasi menonton film untuk mengisi
                waktu luang di tengah kesibukan kuliah.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <h1 className="md:w-full font-semibold text-xl md:text-[20px] text-justify">
              Motivations
            </h1>
            <p className="md:w-full font-thin text-[16px] md:text-[20px] text-justify list-decimal mt-2 mb-8">
              Mengisi waktu luang, mendapatkan bahan untuk topik obrolan, dan
              menemukan film yang sesuai dengan prefensi.
            </p>
            <h1 className="md:w-full font-semibold text-xl md:text-[20px] text-justify">
              Goal
            </h1>
            <p className="md:w-full font-thin text-[16px] md:text-[20px] text-justify list-decimal mt-2 mb-8">
              Menghemat waktu mencari film dan menikmati film yang
              sesuai preferensi.
            </p>
            <h1 className="md:w-full font-semibold text-xl md:text-[20px] text-justify">
              Paint Poin
            </h1>
            <p className="md:w-full font-thin text-[16px] md:text-[20px] text-justify list-decimal mt-2 mb-8">
              Kesulitan karena pilihan film terlalu banyak, rekomendasi yang
              kurang relevan, dan UI aplikasi yang kadang membingungkan.
            </p>
          </div>
        </div>
      </section>
      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[80px] gap-x-[100px] ">
        <h1 className="md:min-w-[300px] colorTitle text-4xl md:text-6xl font-semibold">
          User Flow
        </h1>

        <div>
          <p className="md:w-full font-light text-[16px] md:text-[20px] text-justify mt-4">
            Setelah saya melakukan menganalisa dari permasalahan pengguna, saya
            melakukan penyusunan user flow untuk memudahkan proses penggunaan
            aplikasi.
          </p>
          <img src={imgUserFlow} alt="userFlow" className="mt-16" />
        </div>
      </section>
      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[80px] gap-x-[100px] ">
        <h1 className="md:min-w-[300px] colorTitle text-4xl md:text-6xl font-semibold">
          Wireframe
        </h1>

        <div>
          <p className="md:w-full font-light text-[16px] md:text-[20px] text-justify mt-4">
            Berdasarkan user flow yang telah dibuat, saya mulai membuat
            wireframe yang bertujuan untuk memvisualisasikan antarmuka aplikasi
            dalam tahap awal.
          </p>
          <div className="flex flex-wrap w-full md:max-w-[calc(100vw-200px)] px-8 mt-8 py-8 left-0 top-16 bg-white rounded-lg gap-12 overflow-x-auto">
            <img
              src={imgSplashWireframe}
              alt="userFlow"
              className="mt-16 md:w-[180px] border rounded-lg"
            />
            <img
              src={imgOnboardingWireframe}
              alt="userFlow"
              className="mt-16 md:w-[180px]  border rounded-lg"
            />
            <img
              src={imgLoginWireframe}
              alt="userFlow"
              className="mt-16 md:w-[180px]  border rounded-lg"
            />
            <img
              src={imgSignupWireframe}
              alt="userFlow"
              className="mt-16 md:w-[180px]  border rounded-lg"
            />
            <img
              src={imgHomeWireframe}
              alt="userFlow"
              className="mt-16 md:w-[180px]  border rounded-lg"
            />
            <img
              src={imgInformationMoveWireframe}
              alt="userFlow"
              className="mt-16 md:w-[180px]  border rounded-lg"
            />
            <img
              src={imgMovieWireframe}
              alt="userFlow"
              className="mt-16 md:w-[180px]  border rounded-lg"
            />
            <img
              src={imgAddLibraryWireframe}
              alt="userFlow"
              className="mt-16 md:w-[180px]  border rounded-lg"
            />
          </div>
        </div>
      </section>
      <section className="md:flex text-white px-[40px] md:px[160px] lg:px-[200px] mt-[80px] mb-[80px] gap-x-[100px] ">
        <h1 className="md:min-w-[300px] colorTitle text-4xl md:text-6xl font-semibold">
          High Fidelity
        </h1>

        <div>
          <p className="md:w-full font-light text-[16px] md:text-[20px] text-justify mt-4">
            Tahap ini merupakan pengembangan desain dari waireframe menjadi
            visual yang lengkap. Maka saya membuat desain yang high-fidelity.
          </p>
          <div className="flex flex-wrap w-full md:max-w-[calc(100vw-200px)] pr-8 pl-8 mt-8 py-8 left-0 top-16 bg-white rounded-lg gap-12 overflow-x-auto">
            <img
              src={imgSplash}
              alt="userFlow"
              className="mt-16 md:w-[180px]"
            />
            <img
              src={imgOnboarding}
              alt="userFlow"
              className="mt-16 md:w-[180px]"
            />
            <img
              src={imgLogin}
              alt="userFlow"
              className="mt-16  md:w-[180px]"
            />
            <img
              src={imgSignup}
              alt="userFlow"
              className="mt-16 md:w-[180px]"
            />
            <img src={imgHome} alt="userFlow" className="mt-16 md:w-[180px]" />
            <img
              src={imgInformationMove}
              alt="userFlow"
              className="mt-16 md:w-[180px]"
            />
            <img src={imgMovie} alt="userFlow" className="mt-16 md:w-[180px]" />
            <img
              src={imgAddLibrary}
              alt="userFlow"
              className="mt-16 md:w-[180px]"
            />
          </div>
        </div>
      </section>
      <button className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
        <Link to="/">Kembali</Link>
      </button>
    </div>
  );
};

export default Case;
