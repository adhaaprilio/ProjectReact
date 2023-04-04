import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className=" px-6 lg:px-8 md:py-24 md:mb-12 bg-sky-200">
          <div className="mx-auto max-w-2xl py-4 md:py-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Selamat Datang di CariQerja
              </h1>
              <p className="mt-10 text-lg text-bold leading-8 text-gray-800">
              Temukan pekerjaan impianmu dengan mudah bersama website pencari kerja kami
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/FindJob"
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cari Lowongan
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
