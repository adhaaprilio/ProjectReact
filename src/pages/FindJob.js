import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import Navbar from "../Components/Navbar";
import Content from "../Components/Content";
import { Accordion } from "flowbite-react";

const FindJob = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const {
    search,
    setSearch,
    status,
    setFetchStatus,
    setData,
    accord,
    setAccord,
    filter,
    setFilter
  } = state;
  const { handleChangeSearch, handleSearch, handleAccord, handleChangeFilter, handleFilter } = handleFunction;
  return (
    <>
      <section id="find-job">
        <div className="sticky w-full mt-8 mx-auto px-24 ">
          <div className="flex justify-center">
            {/*<form onSubmit={handleSearch}>
              <input
                type="search"
                value={search}
                onChange={handleChangeSearch}
              ></input>
              <button
                type="submit"
                className="border-2 rounded px-2 bg-blue-500 text-white"
              >
                Cari
              </button>
  </form>*/}
            <form onSubmit={handleSearch} className="flex items-center">
              <label htmlFor="simple-search" className="sr-only">
                Cari Judul Pekerjaan 
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cari Judul Pekerjaan"
                  value={search}
                  onChange={handleChangeSearch}
                />
              </div>
              <button
                type="submit"
                className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
            <button className="p-1 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  
            onClick={() => setFetchStatus(true) && setData(null)}>
             reset data
            </button>
          </div>
          <div id="accordion-collapse" data-accordion="collapse" className="mt-4 w-full justify-center">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                onClick={handleAccord}
                class="flex items-center focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 justify-between p-2 w-full font-medium text-left border border-gray-200 dark:border-gray-700 border-b-0 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span>Filter</span>
                <svg
                  data-accordion-icon
                  class="w-6 h-6 shrink-0 rotate-180"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className={`p-5 border w-full border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-2
              ${accord? "block" : "hidden"}`}>
                <form onSubmit={handleFilter}>
                  <div className="mb-6">
                    <label
                      htmlFor="company city"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Kota
                    </label>
                    <input
                      type="search"
                      id="company city"
                      onChange={handleChangeFilter}
                      value={filter.company_city}
                      name="company_city"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Cari lowongan berdasarkan kota"
                     
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="company_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Nama Perusahaan
                    </label>
                    <input
                      type="search"
                      id="company_name"
                      onChange={handleChangeFilter}
                      value={filter.company_name}
                      name="company_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Cari lowongan berdasarkan nama perusahaan "
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="salary_min"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tipe Pekerjaan
                    </label>
                    <input
                      type="search"
                      id="salary_min"
                      onChange={handleChangeFilter}
                      value={filter.job_type}
                      name="job_type"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Cari lowongan berdasarkan tipe pekerjaan"
                      
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                  <button className="p-1 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  
            onClick={() => setFetchStatus(true) && setData(null)}>
             reset data
            </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FindJob;
