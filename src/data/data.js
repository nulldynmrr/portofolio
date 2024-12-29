import { RxFigmaLogo } from "react-icons/rx";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt, FaMapMarkerAlt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import imgLungscare from "./../asset/Cover LungsCare.svg";
import imgAmbis from "./../asset/Cover Ambis.aja.svg";
import imgKalkulator from "./../asset/Cover Kalkulator.svg";
import imgHTML from "./../asset/html.jpg";
import imgJavascript from "./../asset/js.jpg";
import imgCSS from "./../asset/css.jpg";

export const about = [
  {
    desc: `Saya adalah seorang UI/UX dan Front-End Developer pemula yang mempunyai rasa ingin tahu tinggi dalam dunia UI/UX dan Front-End. Saya Siap berkontribusi dalam menciptakan desain aplikasi atau website untuk mengatasi masalah, dan memberi manfaat bagi pengguna. Mendesain bukan sekadar kegiatan, melainkan kehobian yang saya tekuni dengan minat penuh. Percaya desain yang baik merubah pengalaman pengguna dan meningkatkan kualitas hidup. Komitmen kembangkan keterampilan UI/UX dan Front-End memberikan solusi desain inovatif. Berharap kontribusi positif dalam dunia teknologi.`,
  },
];

export const skills = [
  {
    logo: RxFigmaLogo,
  },
  {
    logo: FaHtml5,
  },
  {
    logo: FaCss3Alt,
  },
  {
    logo: IoLogoJavascript,
  },
  { logo: FaReact },
];

export const organizationExperience = [
  {
    title: "helPhin",
    role: "UI/UX Designer",
    date: "Okt 2024-sekarang",
  },
  {
    title: "Asisten Laboratorium Chevalier",
    role: "Content Creator",
    date: "Sep 2024-sekarang",
  },
  {
    title: "Intership Motion Laboratory",
    role: "Anggota Divisi UI/UX",
    date: "Des 2023-Apr 2024",
  },
  {
    title: "Ambalan Adipati Singacala",
    role: "Kerani (Sekretaris)",
    date: "Jan 2022-Des 2022",
  },
  {
    title: "OSIS SMAN 1 Kawali",
    role: "Koordinator Sekbid 9 IPTEK",
    date: "Nov 2021-Nov 2022",
  },
];

export const commiteExperience = [
  {
    title: "Interfest 2024",
    role: "Anggota Divisi Publikasi Dokumentasi",
    date: "Sep 2024-sekarang",
  },
  {
    title: "PKKMB Telkom University 2024",
    role: "Anggota divisi Publikasi Dokumentasi",
    date: "Jul 2024 – Sep 2024",
  },
  {
    title: "Workshop Implementasi Informatika",
    role: "Pendampingan Guru Mapel Informatika SMP",
    date: "20 Mei 2024",
  },
];

export const projects = [
  {
    title: "Kalkulator",
    desc: "Kalkulator sederhana yang dirancang dengan Javascript. Proyek ini belajar mengenai pada operasi aritmatika dasar dan desain UI/UX nya",
    image: imgKalkulator,
    kategori: ["UI/UX", "Web Development", "Solo", "HTML", "CSS", "Javascript"],
    githubLink: "https://github.com/nulldynmrr/project-javascript-kalkulator",
  },
  {
    title: "Learn design for create a website",
    desc: "Merancang website edukasi yang ramah pengguna. Dengan mempelajari seperti konsistensi visual, dan memiliki prinsip user-freindly",
    image: imgAmbis,
    kategori: ["UI", "Website", "Solo"],
    githubLink: null,
  },

  {
    title: "Build a LungsCare App",
    desc: "Merancang aplikasi untuk pencegah penyakit paru-paru. Tujuan membuat aplikasi ini adalah sebagai Tugas Akhir Motion Laboratory (Motion Hack).",
    image: imgLungscare,
    kategori: ["User Interface", "User Experience", "Team"],
    githubLink: null,
  },
];

export const artikel = [
  {
    image: imgHTML,
    title: "HTML",
    desc: "Menjelaskan mengenai materi HTML.",
    link: "/artikel/html",
  },
  {
    image: imgCSS,
    title: "CSS",
    desc: "Menjelaskan mengenai materi CSS",
    link: "/artikel/css",
  },
  {
    image: imgJavascript,
    title: "Javascript",
    desc: "Menjelaskan mengenai materi JavaScript.",
    link: "/artikel/javascript",
  },
];
