import React from "react";
import fotoProfil from "../assets/fotoProfil.jpg";

function AboutPage() {
  return (
    <main className="min-h-screen w-3/4 mx-auto bg-gray-100">
      <div className="bg-cyan-700 p-5 text-center">
        <h1 className="text-2xl text-white font-medium">About Page</h1>
      </div>
      <div className="relative p-5">
        <img
          src={fotoProfil}
          alt="Foto Profil"
          class="w-auto h-44 float-left mr-5"
        ></img>
        <p className="text-black text-xl font-bold uppercase">
          Muhammad Fauzan Ramadhan
        </p>
        <p className="text-[#7f7f7f]">
          087887568989 | fauzan3596@gmail.com | linked.com/in/mfauzanrmd
        </p>
        <p className="text-[#7f7f7f]">Duren Sawit, Jakarta Timur, Indonesia</p>
        <p>
          Hai, nama saya Fauzan, saya merupakan lulusan fresh graduate dari
          Universitas Diponegoro jurusan Informatika yang memiliki minat tinggi
          untuk belajar dan mencari pengalaman baru. Saya adalah orang yang
          mampu bekerja mandiri dengan kemampuan berkomunikasi yang baik dan
          juga siap bekerja dalam tim. Saya memiliki minat dalam bidang
          Front-end dan berharap untuk menjadi seorang profesional Front-end
          developer di masa depan.
        </p>

        <h2 className="text-xl mt-5 border-b-2 pb-2 font-bold border-black">
          Pengalaman Kerja
        </h2>
        <p className="font-bold float-left m-0">
          PT Integra Solusi Mandiri -
          <span className="text-[#7f7f7f]"> Jakarta, Indonesia</span>
        </p>
        <p className="text-right">Jan 2022 - Jul 2022</p>
        <p>
          <em>Software Developer Internship</em>
        </p>
        <ul>
          <li>
            Membuat aplikasi sistem internal berbasis mobile PT Integra Solusi
            Mandiri menggunakan dart dan php sebagai bahasa pemrograman dengan
            flutter dan lumen sebagai framework
          </li>
        </ul>

        <h2 className="text-xl mt-5 border-b-2 pb-2 font-bold border-black">Pendidikan</h2>
        <p className="font-bold float-left m-0">
          Universitas Diponegoro -
          <span className="text-[#7f7f7f]"> Semarang, Indonesia</span>
        </p>
        <p className="text-right">Agu 2019 - Sep 2023</p>
        <p>
          <em>Sarjana Informatika, 3.76/4.00</em>
        </p>
        <ul>
          <li>
            Ditunjuk sebagai Master of Ceremony pada kegiatan Visiting Professor
            Informatika 2020, Kuliah Umum 2020, dan Pendidikan Karakter ODM FSM
            2020
          </li>
        </ul>

        <h2 className="text-xl mt-5 border-b-2 pb-2 font-bold border-black">Pengalaman Organisasi</h2>
        <p className="font-bold float-left m-0">
          PT Napindo Media Ashatama -
          <span className="text-[#7f7f7f]"> Jakarta, Indonesia</span>
        </p>
        <p className="text-right">Oct 2022 - Sep 2024</p>
        <p>
          <em>
            VIP Registration (LO Exhibition) - Indo Water Expo & Forum (Sep 2024
            & Oct 2022), Indo Livestock Expo & Forum (Jul 2024), Indo Defence
            Expo & Forum (Nov 2022)
          </em>
        </p>
        <ul>
          <li>Memberikan informasi acara kepada pengunjung</li>
          <li>
            Membuat ID Card dan menyiapkan <em>merchandize</em> kepada
            pengunjung
          </li>
          <li>
            Merekapitulasi data identitas pengunjung melalui kuesioner dan kartu
            bisnis yang diberikan
          </li>
        </ul>
        <p className="font-bold float-left m-0">
          Komisi Pemilihan Umum (KPU) -
          <span className="text-[#7f7f7f]"> Jakarta, Indonesia</span>
        </p>
        <p className="text-right">Jan 2022 - Feb 2024</p>
        <p>
          <em>Petugas Kelompok Penyelenggara Pemungutan Suara (KPPS)</em>
        </p>
        <ul>
          <li>
            Bertanggung jawab untuk mencatat daftar kehadiran pada waktu
            pemungutan suara dan merekap jumlah suara menggunakan aplikasi
            SIREKAP
          </li>
        </ul>
        <p className="font-bold float-left m-0">
          Himpunan Mahasiswa Informatika -
          <span className="text-[#7f7f7f]"> Semarang, Indonesia</span>
        </p>
        <p className="text-right">Feb 2021 - Jan 2022</p>
        <p>
          <em>Kepala Staf Ahli Penelitian dan Pengembangan</em>
        </p>
        <ul>
          <li>
            Mengawasi dan mengevaluasi seluruh agenda dan aktivitas yang
            dilakukan oleh Himpunan Mahasiswa Informatika Undip
          </li>
          <li>
            Membuat inisiatif kegiatan baru yang meningkatkan kondisi internal
            organisasi ketika pandemi Covid-19 berlangsung
          </li>
        </ul>

        <h2 className="text-xl mt-5 border-b-2 pb-2 font-bold border-black">Kemampuan, Penghargaan & Pengalaman lain</h2>
        <ul>
          <li>
            <b>Hard Skills: </b>Python, C, Dart, PHP
          </li>
          <li>
            <b>Soft Skills: </b>Critical Thinking, Communication, Leadership,
            Fast Learner
          </li>
          <li>
            <b>Modules Taken: </b>Udemy Learn How To Build Amazing Websites w
            HTML, CSS and Sass, DQLab Data Science with Python, Fundamental SQL,
            Parallel Programming Udacity, Oracle Academy Database, Revou: Intro
            to Data Analytics Mini Course
          </li>
          <li>
            <b>Webinars Attended: </b>Conscious Consumption: Fighting Food
            Waste, Volunesia 4.0 International Talkshow
          </li>
        </ul>
      </div>
    </main>
  );
}

export default AboutPage;
